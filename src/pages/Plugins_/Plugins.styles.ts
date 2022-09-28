import {createStyles } from '@mantine/core';

export const useStyles = createStyles(() => ({
    main: {
        padding: "2rem",
        "> :not(:last-child)": {
            marginBlockEnd: "1.5rem",
        }
    },
    heading: {
        fontSize: '1.8rem',
        color: 'var(--w)',
    },
}))

