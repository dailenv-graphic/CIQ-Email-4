
// remember to use module.exports instead of tailwind.config in production
tailwind.config = 
   {
      // Note: config only includes the used styles & variables of your selection
      content: ["./src/**/*.{html,vue,svelte,js,ts,jsx,tsx}"],
      theme: {
        extend: {
          fontFamily: {
            'font-family-font-1': "-, sans-serif",
          },
          fontSize: {
            'font-size-16': "16px",
          },
          fontWeight: {
            'font-weight-400': "undefined",
          },
          lineHeight: {
            'line-height-26': "26px", 
          },
          letterSpacing: {
             
          },
          borderRadius: {
              
          },
          colors: {
            
            'branding-charcoal-500': '#2f333d',
'color-white-solid': '#ffffff',
'cta-main': '#ef2d61',
          },
          spacing: {
              
          },
          width: {
             
          },
          minWidth: {
             
          },
          maxWidth: {
             
          },
          height: {
             
          },
          minHeight: {
             
          },
          maxHeight: {
             
          }
        }
      }
    }

          