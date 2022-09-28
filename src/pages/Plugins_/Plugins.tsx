import "./Plugins.scss";
import { Input } from '@mantine/core';
import {createStyles, Card, Text} from '@mantine/core';

import {useStyles} from './Plugins.styles'
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
