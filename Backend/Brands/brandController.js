import Brand from "../Models/Brand.js";

export const createBrand = async (req, res) => {
    const { name, description, logo } = req.body;
    const userId = req.user.id; // Assumes middleware has set req.user
  try {
    const newBrand = new Brand({ name, description, logo, createdBy: userId });
    await newBrand.save();
    res.status(201).json(newBrand);
  } catch (error) {
    res.status(500).json({ error: 'Brand creation failed' });
  }
};

export const getAllBrands = async (req, res) => {
    try {
      const brands = await Brand.find();
      res.status(200).json({
        success: true,
        data: brands,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Error fetching brands",
        error: error.message,
      });
    }
  };

export const updateBrand = async (req, res) => {
    const { id } = req.params;
    const { name, description, logo } = req.body;
  
    try {
      const updatedBrand = await Brand.findByIdAndUpdate(
        id,
        { name, description, logo },
        { new: true, runValidators: true } // `new: true` returns the updated document
      );
  
      if (!updatedBrand) {
        return res.status(404).json({
          success: false,
          message: "Brand not found",
        });
      }
  
      res.status(200).json({
        success: true,
        message: "Brand updated successfully",
        data: updatedBrand,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Error updating brand",
        error: error.message,
      });
    }
  };

  export const deleteBrand = async (req, res) => {
    const { id } = req.params;
  
    try {
      const deletedBrand = await Brand.findByIdAndDelete(id);
  
      if (!deletedBrand) {
        return res.status(404).json({
          success: false,
          message: "Brand not found",
        });
      }
  
      res.status(200).json({
        success: true,
        message: "Brand deleted successfully",
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Error deleting brand",
        error: error.message,
      });
    }
  };