//@route GET api/auth
//@desc Test route
//@access Public
router.get('/', async (req, res) => {
  try {
  } catch (error) {
    res.status(500).send('Server Error');
  }
});
