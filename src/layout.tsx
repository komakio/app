import React, { memo, useState, useEffect } from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import { statusBarHeight } from './utils/status-bar';
import { animate } from './utils/animate';
import { AnimatedText } from './shared/text';

const headerHeight = 50;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: statusBarHeight + headerHeight,
  },
  animatedHeaderContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'stretch',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingTop: statusBarHeight,
  },
  header: {
    alignContent: 'center',
    justifyContent: 'center',
    display: 'flex',
    height: headerHeight,
    fontWeight: 'bold',
  },
  headerText: {
    color: 'black',
  },
  mainView: { flex: 1 },
});

export const Layout = memo(({ children }) => {
  const [ready, setReady] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      animate(500);
      setReady(true);
    }, 1000);
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="grey" barStyle="dark-content" />
      <View style={styles.animatedHeaderContainer}>
        <View
          style={[
            styles.header,
            {
              alignSelf: ready ? 'flex-start' : 'center',
            },
          ]}
        >
          <AnimatedText
            transition="fontSize"
            bold={true}
            style={[
              styles.headerText,
              {
                fontSize: ready ? 24 : 36,
              },
            ]}
          >
            KOMAK
          </AnimatedText>
        </View>
      </View>

      {ready && <View style={styles.mainView}>{children}</View>}
    </View>
  );
});
