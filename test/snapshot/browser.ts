import type { Browser } from 'puppeteer';

const getWebSnapshot = async ({
    port,
    link,
    browser,
    platform,
}: Readonly<{
    link: string;
    port: number;
    browser: Browser;
    platform: 'pc' | 'tablet' | 'mobile';
}>) => {
    const page = await browser.newPage();
    await page.setViewport(
        platform === 'pc'
            ? { width: 1920, height: 1080 }
            : platform === 'tablet'
            ? {
                  width: 820,
                  height: 1180,
              }
            : {
                  width: 375,
                  height: 667,
              }
    );

    await page.goto(`http://0.0.0.0:${port}/${link === 'home' ? '' : link}`);

    await new Promise((resolve) => setTimeout(resolve, 2 * 1000));

    return {
        link,
        image: await page.screenshot({
            fullPage: true,
        }),
    } as const;
};

export { getWebSnapshot };
