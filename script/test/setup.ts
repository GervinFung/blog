import * as child from 'child_process';
import { guard } from '../../src/helper/value';

const run = (command: string) => child.execSync(command, { stdio: 'inherit' });

const originalPost =
    <T extends string>(blog: T) =>
    () => {
        const tempDir = 'temp';

        return {
            toTemp: () => {
                run(`mkdir -p ${tempDir}`);
                run(`mv ${blog}/*.md ${tempDir}`);
                run(
                    `cp test/snapshot/content/test-post.md ${blog}/test-post.md`
                );
                run(
                    `cp test/snapshot/content/test-post.md ${blog}/test-post-2.md`
                );
            },
            toSrc: () => {
                run(`rm ${blog}/*.md`);
                run(`mv ${tempDir}/*.md ${blog}`);
                run(`rm -r ${tempDir}`);
            },
        };
    };

const testPost = () => {
    const targetDir = 'test-post';
    const publicBlogImage = 'public/images/blog';

    return {
        copyToPublic: () => {
            run(`cp -r test/snapshot/${targetDir} ${publicBlogImage}`);
        },
        removeFromPublic: () => {
            run(`rm -r ${publicBlogImage}/test-post`);
        },
    };
};

const operatable = () => {
    const blog = 'src/content/blog';

    const moveOriginPost = originalPost(blog);

    return {
        start: () => {
            moveOriginPost().toTemp();
            testPost().copyToPublic();
        },
        end: () => {
            moveOriginPost().toSrc();
            testPost().removeFromPublic();
        },
    };
};

const main = () => {
    const type = guard({
        value: process.argv.at(2),
        error: () => new Error('did not pass argument to cli'),
    }).replace('--', '');

    switch (type) {
        case 'start':
        case 'end': {
            operatable()[type]();
        }
    }
};

main();
