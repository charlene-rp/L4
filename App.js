// =========================== Exercise 1 ===================================
//
// import React from 'react';
// import { View, Text } from 'react-native';
//
// const Exercise1 = () => {
//   return (
//       <View>
//         <Text style={{ fontSize: 24 }}>RP Values</Text>
//         <Text style={{ color: 'green' }}>Excellence</Text>
//         <Text style={{ backgroundColor: 'yellow' }}>Customer-Centric</Text>
//         <Text style={{ fontStyle: 'italic' }}>Integrity</Text>
//         <Text style={{ textAlign: 'center' }}>Teamwork</Text>
//         <Text style={{ backgroundColor: 'black', color: 'white' }}>Enterprising</Text>
//       </View>
//   );
// };
//
// export default Exercise1;

// // =========================== Exercise 2 ===================================
//
// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';
//
// const Exercise2 = () => {
//   return (
//       <View style={{marginTop: 50}}>
//         <View style={styles.greenBox}>
//           <Text style={styles.boxText}>Who We Are</Text>
//         </View>
//         <View style={styles.greenBox}>
//           <Text style={styles.boxText}>Our People</Text>
//         </View>
//         <View style={styles.greenBox}>
//           <Text style={styles.boxText}>Our Campus</Text>
//         </View>
//       </View>
//   );
// };
//
// export default Exercise2;
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f0f0f0',
//     paddingLeft: 20,
//     justifyContent: 'flex-start',
//   },
//   greenBox: {
//     width: 100,
//     height: 100,
//     marginTop: 30,
//     backgroundColor: 'green',
//     borderWidth: 1,
//     borderColor: 'black',
//   },
//   boxText: {
//     textAlign: 'center',
//     color: 'white',
//     lineHeight: 100,
//   },
// });

// // =============================== Exercise 3A ===================================
// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';
//
// const Exercise3A = () => {
//   return (
//       <View style={styles.Parent}>
//         <View style={[styles.Child, { backgroundColor: 'powderblue' }]}>
//           <Text style={styles.ChildText}>Child One</Text>
//         </View>
//         <View style={[styles.Child, { backgroundColor: 'skyblue' }]}>
//           <Text style={styles.ChildText}>Child Two</Text>
//         </View>
//         <View style={[styles.Child, { backgroundColor: 'steelblue' }]}>
//           <Text style={styles.ChildText}>Child Three</Text>
//         </View>
//       </View>
//   );
// };
//
// export default Exercise3A;
//
// const styles = StyleSheet.create({
//   Parent: {
//     flexDirection: 'row',
//     backgroundColor: '#F5fcff',
//     borderColor: '#0099AA',
//     borderWidth: 5,
//     padding: 10,
//   },
//   Child: {
//     borderWidth: 2,
//     textAlign: 'center',
//     fontSize: 24,
//     justifyContent: 'center',
//     alignItems: 'center',
//     height: 100,
//     width: 100,
//   },
//   ChildText: {
//     textAlign: 'center',
//     fontSize: 24,
//   },
// });

// // ================================== Exercise 3B ===============================
// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';
//
// const Exercise3B = () => {
//   return (
//       <View style={styles.Parent}>
//         <View style={[styles.Child, { backgroundColor: 'powderblue' }]}>
//           <Text style={styles.ChildText}>Child One</Text>
//         </View>
//         <View style={[styles.Child, { backgroundColor: 'skyblue' }]}>
//           <Text style={styles.ChildText}>Child Two</Text>
//         </View>
//         <View style={[styles.Child, { backgroundColor: 'steelblue' }]}>
//           <Text style={styles.ChildText}>Child Three</Text>
//         </View>
//       </View>
//   );
// };
//
// export default Exercise3B;
//
// const styles = StyleSheet.create({
//   Parent: {
//     flexDirection: 'column',
//     backgroundColor: '#F5fcff',
//     borderColor: '#0099AA',
//     borderWidth: 5,
//     flex: 1,
//   },
//   Child: {
//     borderWidth: 2,
//     textAlign: 'center',
//     fontSize: 24,
//     justifyContent: 'center',
//     alignItems: 'center',
//     height: 100,
//     flex: 1,
//   },
//   ChildText: {
//     textAlign: 'center',
//     fontSize: 24,
//   },
// });

// // ============================= Exercise 3C ==============================================
//
// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';
//
// const Exercise3C = () => {
//   return (
//       <View style={styles.Parent}>
//         <View style={[styles.Child, { backgroundColor: 'powderblue', maxWidth: 90 }]}>
//           <Text style={styles.ChildText}>Child One</Text>
//         </View>
//         <View style={[styles.Child, { backgroundColor: 'skyblue' }]}>
//           <Text style={styles.ChildText}>Child Two</Text>
//         </View>
//         <View style={[styles.Child, { backgroundColor: 'steelblue', maxHeight: 120 }]}>
//           <Text style={styles.ChildText}>Child Three</Text>
//         </View>
//       </View>
//   );
// };
//
// export default Exercise3C;
//
// const styles = StyleSheet.create({
//   Parent: {
//     flexDirection: 'column',
//     backgroundColor: '#F5fcff',
//     borderColor: '#0099AA',
//     borderWidth: 5,
//     flex: 1,
//   },
//   Child: {
//     borderWidth: 2,
//     textAlign: 'center',
//     fontSize: 24,
//     justifyContent: 'center',
//     alignItems: 'center',
//     height: 100,
//     flex: 1,
//   },
//   ChildText: {
//     textAlign: 'center',
//     fontSize: 24,
//   },
// });

// // ============================= Exercise 3D ==============================================
//
// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';
//
// const Exercise3D = () => {
//   return (
//       <View style={styles.Parent}>
//         <View style={[styles.Child, { backgroundColor: 'powderblue', flex: 1 }]}>
//           <Text style={styles.ChildText}>Child One</Text>
//         </View>
//         <View style={[styles.Child, { backgroundColor: 'skyblue', flex: 2 }]}>
//           <Text style={styles.ChildText}>Child Two</Text>
//         </View>
//         <View style={[styles.Child, { backgroundColor: 'steelblue', flex: 3 }]}>
//           <Text style={styles.ChildText}>Child Three</Text>
//         </View>
//       </View>
//   );
// };
//
// export default Exercise3D;
//
// const styles = StyleSheet.create({
//   Parent: {
//     flexDirection: 'row',
//     backgroundColor: '#F5fcff',
//     borderColor: '#0099AA',
//     borderWidth: 5,
//   },
//   Child: {
//     borderWidth: 2,
//     textAlign: 'center',
//     fontSize: 24,
//     justifyContent: 'center',
//     alignItems: 'center',
//     height: 70,
//   },
//   ChildText: {
//     textAlign: 'center',
//     fontSize: 24,
//   },
// });

// // ============================= Exercise 3E ==============================================
//
// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';
//
// const Exercise3E = () => {
//   return (
//       <View style={styles.Parent}>
//         <View style={[styles.Child, { backgroundColor: 'powderblue' }]}>
//           <Text style={styles.ChildText}>Child One</Text>
//         </View>
//         <View style={[styles.Child, { backgroundColor: 'skyblue' }]}>
//           <Text style={styles.ChildText}>Child Two</Text>
//         </View>
//         <View style={[styles.Child, { backgroundColor: 'steelblue' }]}>
//           <Text style={styles.ChildText}>Child Three</Text>
//         </View>
//       </View>
//   );
// };
//
// export default Exercise3E;
//
// const styles = StyleSheet.create({
//   Parent: {
//     flexDirection: 'column',
//     // justifyContent: 'flex-start',
//     // justifyContent: 'flex-end',
//     // justifyContent: 'center',
//     // justifyContent: 'space-between',
//     // justifyContent: 'space-around',
//     // justifyContent: 'space-evenly'
//     backgroundColor: '#F5fcff',
//     borderColor: '#0099AA',
//     borderWidth: 5,
//     flex: 1,
//
//   },
//   Child: {
//     borderWidth: 2,
//     textAlign: 'center',
//     fontSize: 24,
//   },
//   ChildText: {
//     textAlign: 'center',
//     fontSize: 24,
//   },
// });

// ================================ Exercise 4 =================================
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Exercise4 = () => {
  return (
      <View style={styles.Parent}>
        <View style={[styles.Child, { backgroundColor: '#A3C9F1' }]}>
          <Text style={styles.ChildText}>Square 1</Text>
        </View>
        <View style={[styles.Child, { backgroundColor: '#A1D8D5' }]}>
          <Text style={styles.ChildText}>Square 2</Text>
        </View>
        <View style={[styles.Child, { backgroundColor: '#F9D1D1' }]}>
          <Text style={styles.ChildText}>Square 3</Text>
        </View>
      </View>
  );
};

export default Exercise4;

const styles = StyleSheet.create({
  Parent: {
    flex: 1,
    backgroundColor: 'whitesmoke',
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Child: {
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    borderRadius: 10,
  },
  ChildText: {
    textAlign: 'center',
    fontSize: 16,
    color: '#fff',
  },
});


