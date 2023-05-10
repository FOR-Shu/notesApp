import {
    defineConfig,
    presetAttributify,
    presetIcons,
    presetUno,
    presetWebFonts
} from 'unocss'

export default defineConfig({
    shortcuts: [
        // ...
    ],
    rules: [[/^m-([.\d]+)$/, ([_, num]) => ({ margin: `${num}px` })]],
    theme: {
        colors: {}
    },
    presets: [
        presetUno(),
        presetAttributify(),
        presetIcons({
            scale: 1.2
        }),
        presetWebFonts({
            fonts: {
                // ...
            }
        })
    ]
})
