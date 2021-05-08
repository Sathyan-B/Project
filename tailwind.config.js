module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    
    theme: {
    
    
      minHeight: {
        '0': '0',
        '1': '1rem',
        '2': '2rem',
        '3': '3rem',
        '3.5':'3.5rem',
        'full': '100%',
       },
    
      backgroundColor: theme => ({
        ...theme('colors'),
        'primary': '#156b8a',
        'secondary': '#58c5ed',
        'danger': '#e3342f',
        
        'navHover':'#295e70',
        'navActive':'#58c5ed',
        'mdBg':'#e9f2f6',
        'lgBg':'#f4f5f7',
        'disabledSection':'#f9fafb',  
        'dragBg':'#fff8f1',
        'btnBg':'#20a7d8',
        'disabledBtn':'#eee',
        'profileBg':'#667eea'
       }),
       
       textColor: theme => theme('colors'),
       textColor: {
        'primary': '#156b8a',
        'secondary': '#58c5ed',
        'white':'#fff',
        'lightBlack':'#494545',
        'disabledSection':'#c5c1c1',
        'dragPrimaryColor':'#667eea',
        'note':'#aaa8a8',
       },
       
      extend: {},
    },
    variants: {
      extend: {},
    },
    plugins: [],
  }