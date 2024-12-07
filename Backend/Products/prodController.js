import Product from "../Models/Product.js";
import Brand from "../Models/Brand.js";

export const createProduct = async (req, res) => {
    const { name, description, category, price, image, brand } = req.body;
  
    try {
      // Check if the associated brand exists
      const existingBrand = await Brand.findById(brand);
  
      if (!existingBrand) {
        return res.status(404).json({
          success: false,
          message: "Brand not found",
        });
      }
  
      const product = new Product({ name, description, category, price, image, brand });
      await product.save();
  
      res.status(201).json({
        success: true,
        message: "Product created successfully",
        data: product,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Error creating product",
        error: error.message,
      });
    }
  };

  export const getAllProducts = async (req, res) => {
    try {
      const products = await Product.find().populate("brand", "name"); // Populates brand name
      res.status(200).json({
        success: true,
        data: products,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Error fetching products",
        error: error.message,
      });
    }
  };

  export const getProductById = async (req, res) => {
    const { id } = req.params;
  
    try {
      const product = await Product.findById(id).populate("brand", "name");
  
      if (!product) {
        return res.status(404).json({
          success: false,
          message: "Product not found",
        });
      }
  
      res.status(200).json({
        success: true,
        data: product,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Error fetching product",
        error: error.message,
      });
    }
  };

  export const updateProduct = async (req, res) => {
    const { id } = req.params;
    const { name, description, category, price, image, brand } = req.body;
  
    try {
      const updatedProduct = await Product.findByIdAndUpdate(
        id,
        { name, description, category, price, image, brand },
        { new: true, runValidators: true }
      );
  
      if (!updatedProduct) {
        return res.status(404).json({
          success: false,
          message: "Product not found",
        });
      }
  
      res.status(200).json({
        success: true,
        message: "Product updated successfully",
        data: updatedProduct,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Error updating product",
        error: error.message,
      });
    }
  };

  export const deleteProduct = async (req, res) => {
    const { id } = req.params;
  
    try {
      const deletedProduct = await Product.findByIdAndDelete(id);
  
      if (!deletedProduct) {
        return res.status(404).json({
          success: false,
          message: "Product not found",
        });
      }
  
      res.status(200).json({
        success: true,
        message: "Product deleted successfully",
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Error deleting product",
        error: error.message,
      });
    }
  };
  
