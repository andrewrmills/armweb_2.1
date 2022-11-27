import * as THREE from 'three'
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js'
import Experience from '../Experience.js'

export default class Font
{
    constructor()
    {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources

        // Setup
        this.resource = this.resources.items.helvetiker

        this.setGeometryA()
        this.setMaterialA()
        this.setMeshA()

        this.setGeometryB()
        this.setMaterialB()
        this.setMeshB()
    }
    
    setGeometryA()
    {
        this.geometry = new TextGeometry(
            'Andrew Mills',
            {
                font: this.resource,
                size: 2,
                height: 0.2,
                curveSegments: 5,
                bevelEnabled: true,
                bevelThickness: 0.03,
                bevelSize: 0.02,
                bevelOffset: 0,
                bevelSegments: 4
            }
        )
        this.geometry.center()
    }
    setMaterialA()
    {
        this.material = new THREE.MeshNormalMaterial({
        })
    }

    setMeshA()
    {
        this.mesh = new THREE.Mesh(this.geometry, this.material)
        this.mesh.position.set(-10, -5, -25)
        this.scene.add(this.mesh)
    }

    setGeometryB()
    {
        this.geometry = new TextGeometry(
            'Developer. Pipe Dreamer. All Round Nice Guy.',
            {
                font: this.resource,
                size: 1,
                height: 0.2,
                curveSegments: 5,
                bevelEnabled: true,
                bevelThickness: 0.03,
                bevelSize: 0.02,
                bevelOffset: 0,
                bevelSegments: 4
            }
        )
        this.geometry.center()
    }
    setMaterialB()
    {
        this.material = new THREE.MeshNormalMaterial({
        })
    }

    setMeshB()
    {
        this.mesh = new THREE.Mesh(this.geometry, this.material)
        this.mesh.position.set(-4, -11, -25)
        this.scene.add(this.mesh)
    }


}