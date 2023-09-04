import React, { useMemo } from 'react';
import { useCallback } from 'react';
import Particles from 'react-tsparticles';
import type {
  Container,
  Engine,
  IOptions,
  ISourceOptions,
} from 'tsparticles-engine';
import { loadFull } from 'tsparticles'; // if you are going to use `loadFull`, install the "tsparticles" package too.
// import { loadSlim } from "tsparticles-slim"; // if you are going to use `loadSlim`, install the "tsparticles-slim" package too.

const ParticleEffect: React.FC = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    console.log(engine);

    // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    //await loadFull(engine);
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(
    async (container: Container | undefined) => {
      await console.log(container);
    },
    []
  );

  const options: ISourceOptions = useMemo(() => {
    return {
      fpsLimit: 60,
      interactivity: {
        events: {
          onClick: {
            enable: true, // enable click event
            mode: 'push', // adds particles on click
          },
          onHover: {
            enable: true, // enable hover event
            mode: 'grab',
            parallax: {
              enable: true,
              force: 30,
              smooth: 30,
            },
          },
          resize: true,
        },
        modes: {
          push: {
            quantity: 50, // number of particles to add (hooked up to the onClick event)
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: '#ffffff',
        },
        move: {
          direction: 'none',
          enable: true, // enable movement of particles
          outModes: {
            default: 'bounce',
          },
          random: false,
          speed: 1,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            area: 1000,
          },
          value: 50,
        },
        opacity: {
          random: {
            enable: true,
            minimumValue: 0.1,
          },
          value: {
            min: 0,
            max: 1,
          },
          animation: {
            enable: true,
            count: 0,
            speed: 1,
            decay: 0,
            delay: 0,
            sync: false,
            mode: 'auto',
            startValue: 'random',
            destroy: 'none',
            minimumValue: 0,
          },
        },
        shape: {
          type: 'circle',
        },
        size: {
          random: {
            enable: true,
            minimumValue: 1,
          },
          value: {
            min: 1,
            max: 3,
          },
          animation: {
            count: 0,
            enable: false,
            speed: 4,
            decay: 0,
            delay: 0,
            sync: false,
            mode: 'auto',
            startValue: 'random',
            destroy: 'none',
            minimumValue: 0.3,
          },
        },
      },
      detectRetina: true,
    };
  }, []);

  return (
    <>
      <Particles
        id='tsparticles'
        init={particlesInit}
        loaded={particlesLoaded}
        options={options}
      />
    </>
  );
};

export default ParticleEffect;
