import React from 'react'
import { useAuth0 } from '@auth0/auth0-react';
import JSONPretty from 'react-json-pretty';

function Profile() {
    const { user, isAuthenticated } = useAuth0();
    return (
        isAuthenticated && (
           <div>
                 
                 <img src={user.picture} alt={user.name} />
                 <h2>{user.name}</h2>
                 <p>{user.email}</p>
                 <JSONPretty data={user} />
                
           </div>
        )
    )
}
 export default Profile



// import React from 'react';

// import { useAuth0 } from '@auth0/auth0-react';
// import { Container, Row, Col } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css'; 

// const Profile = () => {
//   const { user, isAuthenticated } = useAuth0();
//   return (
//     isAuthenticated && (
//     <div className='mb-5'>
//       <div className="align-items-center profile-header mb-5 text-center text-md-left">
//         <div md={2}>
//           <img
//             src={user.picture}
//             alt="Profile"
//             className="rounded-circle img-fluid profile-picture mb-3 mb-md-0"
//           />
//         </div>
//         <div md>
//           <h2>{user.name}</h2>
//           <p className="lead text-muted">{user.email}</p>
//         </div>
//       </div>
//       <div>
       
//           {JSON.stringify(user, null, 2)}
//       </div>
//     </div>
//     )
//   );
// };

// export default Profile;