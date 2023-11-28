import { useGLTF,OrbitControls,Preload } from "@react-three/drei"
import { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import CanvasLoader from "./loader"

const Computer = () => {
    const computer= useGLTF("./desktop_pc/scene.gltf");
  return (
    <mesh>
        <hemisphereLight intensity={0.15} groundColor={"black"}/>
        <pointLight intensity={1}/>
        <primitive object={computer?.scene}
        scale={0.75}
        position={[0,-0.25,-1.5]}
        />
    </mesh>
    
  )
}

const ComputerCanvas=()=>{
    return(
        <Canvas
        frameloop="demand"
        shadows
        camera={{position:[20,5,5],fov:25}}
        gl={{preserveDrawingBuffer:true}}
        className="sm:!h-[650px] sm:!w-[850px] !h-[150px] !w-[275px]"
        >
<Suspense fallback={<CanvasLoader/>}>
    <OrbitControls
    enableZoom={false}
    maxPolarAngle={Math.PI / 2}
    minPolarAngle={Math.PI/ 2}
    />
   <Computer/>
</Suspense>
<Preload all/>
        </Canvas>
    )
}

export default ComputerCanvas;