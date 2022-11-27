

export default [
    {
        name: 'environmentMapTexture',
        type: 'cubeTexture',
        path:
        [
            'textures/environmentMap/px.jpg',
            'textures/environmentMap/nx.jpg',
            'textures/environmentMap/py.jpg',
            'textures/environmentMap/ny.jpg',
            'textures/environmentMap/pz.jpg',
            'textures/environmentMap/nz.jpg',
        ]
    },
    {
        name: 'moonColorTexture',
        type: 'texture',
        path: 'textures/moon/Dirt_BaseColor.jpg'
    },
    {
        name: 'moonAmbientOcclusionTexture',
        type: 'texture',
        path: 'textures/moon/Dirt_AmbientOcclusion.jpg'
    },
    {
        name: 'moonHeightTexture',
        type: 'texture',
        path: 'textures/moon/Dirt_Height.png'
    },
    {  
        name: 'moonNormalTexture',
        type: 'texture',
        path: 'textures/moon/Dirt_Normal.jpg'
    },
    {  
        name: 'moonRoughnessTexture',
        type: 'texture',
        path: 'textures/moon/Dirt_Roughness.jpg'
    },
    {
        name: 'landerModel',
        type: 'gltfModel',
        path: 'models/Lander/lander.glb'
    },
    {
        name: 'moonModel',
        type: 'gltfModel',
        path: 'models/Moon/moon.gltf'
    },
    {
        name: 'helvetiker',
        type: 'font',
        path: 'fonts/helvetiker_regular.typeface.json'
    }
]