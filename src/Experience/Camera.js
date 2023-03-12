import * as THREE from 'three'
import Experience from './Experience.js'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

export default class Camera
{
    constructor() 
    {
        this.experience = new Experience
        this.sizes = this.experience.sizes
        this.scene = this.experience.scene
        this.canvas = this.experience.canvas
        this.flag = 1

        this.setInstance()
        // this.setOrbitControls()
    }

    setInstance()
    {
        this.instance = new THREE.PerspectiveCamera(
            // FOV
            35,
            // Aspect
            this.sizes.width / this.sizes.height,
            // Near
            0.1,
            // Far
            100
            )
        this.instance.position.set(0.5, 2, 8)
        // this.instance.position.set(-10, 0.5, 8)
        this.scene.add(this.instance)

    }

    // setOrbitinstance()
    // {
    //     this.orbitInstance = new THREE.PerspectiveCamera(
    //         // FOV
    //         35,
    //         // Aspect
    //         this.sizes.width / this.sizes.height,
    //         // Near
    //         0.1,
    //         // Far
    //         100
    //         )
    //     this.orbitInstance.position.set(0.5, 2, 8)
    //     this.scene.add(this.orbitInstance)
    // }

    setOrbitControls() 
    {
        this.controls = new OrbitControls(this.orbitInstance, this.canvas)
        this.controls.enableDamping = true
    }

    resize() 
    {
        this.instance.aspect - this.sizes.width / this.sizes.height
        this.instance.updateProjectionMatrix()
    }

    update() 
    {
        // if(this.instance.position.y < 15.98)
        // {
            this.instance.lookAt(this.experience.world.scene.children[1].position)   
            this.instance.position.y = window.scrollY/this.sizes.height * 4
        // }
        // else if (this.flag === 1)
        // {
        //     console.log(this.instance)
        //     this.setOrbitinstance()
        //     this.setOrbitControls()
        //     this.flag = 0
        //     console.log(this.orbitInstance)
        //     console.log(this.scene)
        // }
        // else
        // {
        //     this.controls.update()
        // }
    }
}