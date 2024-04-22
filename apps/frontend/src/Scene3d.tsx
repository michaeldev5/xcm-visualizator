import MainScene from './MainScene';
import Canvas3D from './components/Canvas3D';
import Lights from './components/Lights';

const Scene3d = () => {
  return (
    <div id="canvas-container">
      <Canvas3D>
        <Lights />
        <MainScene />
      </Canvas3D>
    </div>
  );
};

export default Scene3d;
