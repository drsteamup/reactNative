

import React from 'react';
import { useState } from 'react';
import { ScrollView } from 'react-native';
import { Card, Text, ListItem, Avatar } from 'react-native-elements';
// import partners from '../shared/partners';
import { PARTNERS } from '../shared/partners';

// Mission component
const Mission = () => {
  return (
    <Card>
      <Card.Title>Our Mission</Card.Title>
      <Card.Divider />
      <Text style={{ margin: 10 }}>
        We present a curated database of the best campsites in the vast woods and backcountry of the World Wide Web Wilderness. We increase access to adventure for the public while promoting safe and respectful use of resources. The expert wilderness trekkers on our staff personally verify each campsite to make sure that they are up to our standards. We also present a platform for campers to share reviews on campsites they have visited with each other.
      </Text>
    </Card>
  );
};

// AboutScreen component
const AboutScreen = () => {
  const [partnersData] = useState(PARTNERS);

  return (
    <ScrollView>
      {/* Render the Mission component */}
      <Mission />

      {/* Render the Community Partners Card */}
      <Card>
        <Card.Title>Community Partners</Card.Title>
        <Card.Divider />

        {/* Use map to render ListItem for each partner */}
        {partnersData.map((partner) => (
          <ListItem key={partner.id}>
            <Avatar rounded source={partner.image} />
            <ListItem.Content>
              <ListItem.Title>{partner.name}</ListItem.Title>
              <ListItem.Subtitle>{partner.description}</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
        ))}
      </Card>
    </ScrollView>
  );
};

export default AboutScreen;

// AboutScreen.js
// import React from 'react';
// import { ScrollView } from 'react-native';

// const AboutScreen = () => {
//   return (
//     <ScrollView>
//       {/* Add content here in Task 2 */}
//     </ScrollView>
//   );
// };

// export default AboutScreen;



// import React from 'react';
// import { ScrollView } from 'react-native';

// const AboutScreen = () => {
//   return (
//     <ScrollView>
//       {/* Content for AboutScreen will be added in Task 2 */}
//     </ScrollView>
//   );
// };

//  export default AboutScreen;


// import React from 'react' ;
// import { useState } from 'react';
// import { ScrollView } from 'react-native';
// import { Card, Text, ListItem, Avatar } from 'react-native-elements';
// import { PARTNERS } from '../shared/partners'; 


// const Mission = () => {
//   return (
//     <Card>
//       <Card.Title>Our Mission</Card.Title>
//       <Card.Divider />
//       <Text style={{ margin: 10 }}>
//         We present a curated database of the best campsites in the vast woods and
//         backcountry of the World Wide Web Wilderness. We increase access to adventure
//         for the public while promoting safe and respectful use of resources. The expert
//         wilderness trekkers on our staff personally verify each campsite to make sure
//         that they are up to our standards. We also present a platform for campers to
//         share reviews on campsites they have visited with each other.
//       </Text>
//     </Card>
//   );
// };

// const AboutScreen = () => {
//   const [partnersData] = useState(PARTNERS);

//   return (
//     <ScrollView>
//       <Mission />
//       <Card>
//         <Card.Title>Community Partners</Card.Title>
//         <Card.Divider />
//         {partnersData.map((partner) => {
//           <ListItem key={partner.id}>
//             <Avatar rounded source={partner.image} />
//             <ListItem.Content>
//               <ListItem.Title>{partner.name}</ListItem.Title>
//               <ListItem.Subtitle>{partner.description}</ListItem.Subtitle>
//             </ListItem.Content>
//           </ListItem>
//           })}
//       </Card>

//     </ScrollView>
//   );
// };

// export default AboutScreen;

