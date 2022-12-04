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
            this.scene.add(this.instance)
    }

    setOrbitControls() 
    {
        this.controls = new OrbitControls(this.instance, this.canvas)
        this.controls.enableDamping = true
    }

    resize() 
    {
        this.instance.aspect - this.sizes.width / this.sizes.height
        this.instance.updateProjectionMatrix()
    }

    update(object) 
    {
        // this.controls.update()
        this.instance.lookAt(object)   
        this.instance.position.y = window.scrollY/this.sizes.height * 4
    }
}