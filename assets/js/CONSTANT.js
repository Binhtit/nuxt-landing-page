const BPLAY_CONSTANT = {
  // object const BPLAY type
  BPLAY_TYPE: {
    BPLAY_TYPE_ALL: '0',
    BPLAY_TYPE_ACTION: '1',
    BPLAY_TYPE_MAGIC: '2',
    BPLAY_TYPE_HAREM: '3',
  },
  BPLAY_CATEGORY: {
    BPLAY_2D: 1,
    BPLAY_3D: 2,
  },
}

const constant = {
  getCostant(contName) {
    let constValue = ''
    BPLAY_CONSTANT.forEach((key, value) => {
      try {
        if (contName === key) {
          return (constValue = value)
        }
        return constValue
      } catch (error) {
        return constValue
      }
    })
  },
}

export { BPLAY_CONSTANT, constant }
