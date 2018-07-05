const NavigationBarStyles = () => ({

  sidebarButton: {
    boxShadow: 'none',
    backgroundColor: '#ffbd00',

    '&:hover': {
      backgroundColor: '#EDB000'
    },
    '&:active': {
      boxShadow: 'none',
    },
  },

  appBarContainer: {
    boxShadow: 'none',
    backgroundColor: '#ffbd00',
  },

  toolBarContainer: {
    justifyContent: 'space-between',
  },

  appBarHeading: {
    margin: '0 10px',
    fontWeight: 'bold',
  },

  searchButton: {
    backgroundColor: 'rgba(0,0,0,0.04);',
    width: '60%',
    cursor: 'text',
    margin: '0 30px',
    boxShadow: 'none',
    borderRadius: '5px',
    display: 'flex',
    justifyContent: 'flex-start',

    '&:hover': {
      backgroundColor: 'rgba(0,0,0,0.04);',
    },

    ['@media (max-width: 720px)']: {
      display: 'none',
    },
  },
});

export default NavigationBarStyles;
