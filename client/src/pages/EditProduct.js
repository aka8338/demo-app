import './Profile.css'


export default function EditProduct() {
  return (
    <div className='profile'>

<h3 className='h3'>The following table contains some personal information about you Product.</h3>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Product Description</th>
            <th>Price</th>
            <th>Phone Number</th>
            <th>Facebook</th>
            <th>Twitter</th>
            <th>Telegram</th>
            <th>Product Gallary</th>
            <th>Phone Action</th>

          </tr>
        </thead>
        <tbody>
          <tr>
            <td>nike</td>
            <td>brand shoes</td>
            <td>3000 birr</td>
            <td>964846609</td>
            <td></td>
            <td></td>
            <td></td>
            <td>964846609</td>
          </tr>
        </tbody>
      </table>

    </div>
  )
}