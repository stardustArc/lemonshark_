module.exports = {
    params: {
        designator: 'LED',
        side: 'F',
        din: undefined,
        dout: undefined,
        VCC: {type: 'net', value: 'VCC'},
        GND: {type: 'net', value: 'GND'}
    },
    body: p => `
    
        (footprint WS2812B (layer F.Cu) (tedit 53BEE615)

            ${p.at /* parametric position */}

            ${'' /* footprint reference */}
            (fp_text reference "${p.ref}" (at 0 0) (layer F.SilkS) ${p.ref_hide} (effects (font (size 1.27 1.27) (thickness 0.15))))
            (fp_text value "" (at 0 0) (layer F.SilkS) hide (effects (font (size 1.27 1.27) (thickness 0.15))))

            (fp_line (start -1.9 -1.9) (end -1.9 1.9) (layer ${p.side}.SilkS) (width 0.15))
            (fp_line (start -1.9 1.9) (end 1.9 1.9) (layer ${p.side}.SilkS) (width 0.15))
            (fp_line (start 1.9 1.9) (end 1.9 -1.9) (layer ${p.side}.SilkS) (width 0.15))
            (fp_line (start 1.9 -1.9) (end -1.9 -1.9) (layer ${p.side}.SilkS) (width 0.15))

            (fp_poly (pts (xy 5 2.5) (xy 5 0.675) (xy 6 1.5875)) (layer B.SilkS) (width 0.1))

            (pad 1 smd rect (at -2.9 -0.8 ${p.r}) (size 1.4 1.2) (layers ${p.side}.Cu ${p.side}.Paste ${p.side}.Mask) ${p.VCC})
            (pad 2 smd rect (at -2.9 0.8 ${p.r}) (size 1.4 1.2) (layers ${p.side}.Cu ${p.side}.Paste ${p.side}.Mask) ${p.dout})
            (pad 3 smd rect (at 2.9 0.8 ${p.r}) (size 1.4 1.2) (layers ${p.side}.Cu ${p.side}.Paste ${p.side}.Mask) ${p.GND})
            (pad 4 smd rect (at 2.9 -0.8 ${p.r}) (size 1.4 1.2) (layers ${p.side}.Cu ${p.side}.Paste ${p.side}.Mask) ${p.din})
            
        )
    
    `
}