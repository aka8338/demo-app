import './Profile.css'


export default function Profile() {
  return (
    <div className='profile'>

<h3 className='h3'>The following table contains some personal information about you.</h3>
      <table className="table">
        <thead>
          <tr>
            <th>Username</th>
            <th>Email</th>
            <th>Password</th>
            <th>Phone Number</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>ak</td>
            <td>aklilu6484@gmail.com</td>
            <td>12345</td>
            <td>964846609</td>
          </tr>
        </tbody>
      </table>

    </div>
  )
}