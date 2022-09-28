import "./Plugins.scss";
import { Box } from "@mantine/core";
import { Input } from '@mantine/core';
import {createStyles, Card, Text} from '@mantine/core';

const useStyles = createStyles(() => ({
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

export const Plugins = () => {
  const {classes}= useStyles();

  return (
    <>
       <main className={classes.main}>
            <Text size="xl" weight={600}>
               Plugins
            </Text>
            <Input  placeholder="Search"/>
            <div>
                <Card>
                    <Card.Section>
                    </Card.Section>
                    <Card.Section>
                    </Card.Section>
                </Card>
            </div>
        </main> 
    </>
  );
};
