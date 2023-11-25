// import React from 'react';
// import { ScrollView } from 'react-native';
// import { Card, Text } from 'react-native-elements';

// const ContactScreen = () => {
//   return (
//     <ScrollView>
//       <Card wrapperStyle={{ margin: 20 }}>
//         <Card.Title>Contact Information</Card.Title>
//         <Card.Divider />

//         <Text style={{ marginBottom: 10 }}>
//           1 Nucamp Way {'\n'}
//           Seattle, WA 98001 {'\n'}
//           U.S.A.
//         </Text>

//         <Text>
//           Phone: 1-206-555-1234 {'\n'}
//           Email: campsites@nucamp.co
//         </Text>
//       </Card>
//     </ScrollView>
//   );
// };

// export default ContactScreen;





// import React from 'react';
// import { ScrollView } from 'react-native';

// const ContactScreen = () => {
//   return (
//     <ScrollView>
//       {/* Content for ContactScreen will be added in Task 2 */}
//     </ScrollView>
//   );
// };

// export default ContactScreen;


// ContactScreen.js
// import React from 'react';

// import { ScrollView } from 'react-native';

// const ContactScreen = () => {
//   return (
//     <ScrollView>
//       {/* Add content here in Task 2 */}
//     </ScrollView>
//   );
// };

// export default ContactScreen;


import React from 'react';
import { ScrollView, Text } from 'react-native';
import { Card } from 'react-native-elements';

const ContactScreen = () => {
  return (
    <ScrollView>
      <Card wrapperStyle={{ margin: 20 }}>
        <Card.Title>Contact Information</Card.Title>
        <Card.Divider />
        <Text>1 Nucamp Way</Text>
        <Text>Seattle, WA 98001</Text>
        <Text>U.S.A.</Text>
        <Text style={{ marginBottom: 10 }}>Phone: 1-206-555-1234</Text>
        <Text>Email: campsites@nucamp.co</Text>
      </Card>
    </ScrollView>
  );
};

export default ContactScreen;
