import React, {
  memo,
  useState,
  useEffect,
  useRef,
  useCallback,
  FC,
} from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import { Shape } from './shapes/shape';
import { useRouter } from '@modules/router-provider';

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    opacity: 0.2,
    zIndex: 100000,
  },
});

const WIDTH = Dimensions.get('screen').width;
const HEIGHT = Dimensions.get('screen').height;

const initialPoint1 = {
  x: WIDTH / 2,
  y: -100,
};
const initialPoint2 = {
  x: WIDTH + 100,
  y: HEIGHT,
};
const initialPoint3 = {
  x: WIDTH + 200,
  y: HEIGHT / 2,
};
const initialPoint4 = {
  x: -200,
  y: HEIGHT + HEIGHT / 4,
};
const initialNeeder1 = initialPoint1;
const initialNeeder2 = {
  x: WIDTH / 2,
  y: HEIGHT + 100,
};

const needer1Position = {
  x: WIDTH / 4,
  y: 200,
};
const needer2Position = {
  x: WIDTH - WIDTH / 4,
  y: HEIGHT / 2 + 100,
};

interface BackgroundProps {
  ready: boolean;
}

export const Background: FC<BackgroundProps> = memo(({ ready }) => {
  const [point1, setPoint1] = useState(initialPoint1);
  const [point2, setPoint2] = useState(initialPoint2);
  const [point3, setPoint3] = useState(initialPoint3);
  const [point4, setPoint4] = useState(initialPoint4);
  const [needer1, setNeeder1] = useState(initialNeeder1);
  const [needer2, setNeeder2] = useState(initialNeeder2);

  const route = useRouter();

  const timeout = useRef<number>();
  const animateIntro = useCallback(() => {
    setPoint1({ x: WIDTH - 50, y: 150 });
    setNeeder1(needer1Position);
    timeout.current = setTimeout(() => {
      setNeeder2(needer2Position);
      setPoint2({
        y: HEIGHT / 2 + 200,
        x: WIDTH / 2 + 100,
      });
      setPoint3(initialPoint3);
    }, 1000);
  }, []);
  const animateLoginSignup = useCallback(() => {
    clearTimeout(timeout.current);
    setNeeder1(needer1Position);
    setNeeder2(needer2Position);
    setPoint1({ x: WIDTH / 2, y: 200 });
    setPoint2({
      y: HEIGHT / 2 + 100,
      x: WIDTH / 2 - 50,
    });
    setPoint3({
      y: HEIGHT - 100,
      x: WIDTH / 2 - 50,
    });
  }, []);

  const animateProfileType = useCallback(() => {
    clearTimeout(timeout.current);
    setNeeder1(needer1Position);
    setNeeder2(needer2Position);
    setPoint1({ x: WIDTH / 4, y: 300 });
    setPoint2({
      y: HEIGHT / 2 - 100,
      x: (3 * WIDTH) / 4,
    });
    setPoint3({
      y: HEIGHT / 2,
      x: WIDTH / 2,
    });
    setPoint4(initialPoint4);
  }, []);

  const animateProfileInfos = useCallback(() => {
    clearTimeout(timeout.current);
    setNeeder1(needer1Position);
    setNeeder2(needer2Position);
    setPoint1({ x: WIDTH / 4 + 25, y: 275 });
    setPoint2({
      y: HEIGHT / 2,
      x: (3 * WIDTH) / 4,
    });
    setPoint3({
      y: HEIGHT / 2 + 25,
      x: WIDTH / 2 + 25,
    });
    setPoint4({
      y: HEIGHT - 100,
      x: WIDTH / 2 + 25,
    });
  }, []);

  const animateOut = useCallback(() => {
    clearTimeout(timeout.current);
    setNeeder1(initialNeeder1);
    setNeeder2(initialNeeder2);
    setPoint1(initialPoint1);
    setPoint2(initialPoint2);
    setPoint3(initialPoint3);
    setPoint4(initialPoint4);
  }, []);

  useEffect(() => {
    if (!ready) {
      return;
    }
    console.log(route);
    if (route === 'intro') {
      animateIntro();
    } else if (route === 'login-signup') {
      animateLoginSignup();
    } else if (route === 'profile-type') {
      animateProfileType();
    } else if (route === 'profile-infos') {
      animateProfileInfos();
    } else {
      animateOut();
    }
  }, [
    route,
    ready,
    animateIntro,
    animateLoginSignup,
    animateProfileInfos,
    animateProfileType,
    animateOut,
  ]);

  return (
    <View style={styles.container}>
      <Shape x={point1.x} y={point1.y} type="blue" />
      <Shape x={point2.x} y={point2.y} type="blue" />
      <Shape x={point3.x} y={point3.y} type="blue" />
      <Shape x={point4.x} y={point4.y} type="blue" />
      <Shape x={needer1.x} y={needer1.y} type="red" circle={true} big />
      <Shape x={needer2.x} y={needer2.y} type="red" circle={true} big />
    </View>
  );
});
