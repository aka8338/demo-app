import './Product.css';
function ProductForm() {
    return (
        <div className="form-cont">
            <p>
please fill out those fields and choose a product image to be displayed on the "browse" button. 
if you have and confusion on how to upload your product please watch the video below on this page.

            </p>
            <h3 className='H3'>Add New Product</h3>
         
            <form>
                <div className="form-groupp">
                    <label>Name of Product:</label>
                    <input
                        type="text"
                        name="productName"
                        
                        placeholder="ex:Nike"/>
                       

                    <label className='label-l'>Price:</label>
                    <input
                        type="number"
                        name="price"
                        placeholder="ex:1000 Birr" />

                    <label>Phone Number:</label>
                    <input
                        type="text"
                        name="phoneNumber" 
                        placeholder="ex:0949618338"/>

                    <label>Product Category:</label>
                    <select
                        name="productCategory"

                    >
                        <option value="">Choose...</option>
                        <option value="category1">Category 1</option>
                        <option value="category2">Category 2</option>
                    </select>
                </div>

                <div className="form-groupp">
                    <label>Product Description:</label>
                    <textarea
                        name="productDescription"

                        rows="4"
                        cols="50" />
                </div>

                <div className="form-groupp">
                    <label>Add Product Picture:</label>
                    <input type="file" />
                </div>

                <div className="form-group social-links">
                    <label>Add Facebook Link:</label>
                    <input
                        type="text"
                        name="facebookLink" />

                    <label>Add Twitter Link:</label>
                    <input
                        type="text"
                        name="twitterLink" />

                    <label>Add Telegram Link:</label>
                    <input
                        type="text"
                        name="telegramLink" />
                </div>

                <button type="submit" className="submit-button">
                    Add New Product
                </button>
                <button className='watchVideo '>Watch Video</button>
            </form>
        </div>
    );
};
export default ProductForm;