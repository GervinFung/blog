const guard = <T, Err extends Error>({
    value,
    error,
}: Readonly<{
    value: T | null | undefined;
    error: () => Err;
}>) => {
    if (value !== null && value !== undefined) {
        return value;
    }
    throw error();
};

export { guard };
