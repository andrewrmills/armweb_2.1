import * as THREE from 'three'
import Experience from './Experience.js'

export default class renderer
{
    constructor()
    {
        this.experience = new Experience()
        this.canvas = this.experience.canvas
        this.sizes = this.experience.sizes
        this.scene = this.experience.scene
        this.camera = this.experience.camera
        this.debug = this.experience.debug

                // Debug
                if(this.debug.active)
                {
                    this.debugFolder = this.debug.ui.addFolder('Renderer')
                }

        this.setInstance()
    }

    setInstance() 
    {
        this.instance = new THREE.WebGLRenderer(
            {
                canvas: this.canvas,
                // powerPreference: 'high-performance',
                // antialias: true
            })
            this.instance.physicallyCorrectLights = true
            this.instance.outputEncoding = THREE.sRGBEncoding
            this.instance.toneMapping = THREE.ReinhardToneMapping
            this.instance.toneMappingExposure = 1
            this.instance.shadowMap.enabled = true
            this.instance.shadowMap.type = THREE.PCFSoftShadowMap
            this.instance.setClearColor('#211d20')
            this.instance.setSize(this.sizes.width, this.sizes.height)
            this.instance.setPixelRatio(this.sizes.pixelRatio)
            
            // Debug
            if(this.debug.active)
            {
                this.debugFolder
                .add(this.instance, 'toneMapping', {
                    No: THREE.NoToneMapping,
                    Linear: THREE.LinearToneMapping,
                    Reinhard: THREE.ReinhardToneMapping,
                    Cineon: THREE.CineonToneMapping,
                    ACESFilmic: THREE.ACESFilmicToneMapping
                })

                this.debugFolder
                .add(this.instance, 'toneMappingExposure')
                .min(0)
                .max(10)
                .step(0.001)
            }

            // Renderer Information
            // console.log (this.instance.info)
    }

    resize()
    {
        this.instance.setSize(this.sizes.width, this.sizes.height)
        this.instance.setPixelRatio(this.sizes.pixelRatio)
    }

    update()
    {
        this.instance.render(this.scene, this.camera.instance)
    }
}



