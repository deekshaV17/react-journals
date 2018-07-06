const CreateLabelStyles = () => ({
  createLabelInput: {
    fontSize: '15px',
    margin: '0 10px',

    '&::before, &:hover': {
      border: 0,
    },
  },
  createLabelIconButton: {
    '&:hover': {
      background: 'none',
    },
  },
});

export default CreateLabelStyles;
