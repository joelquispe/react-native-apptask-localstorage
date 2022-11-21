import { useCallback, useEffect, useRef, useState } from "react";
import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  TextInput,
} from "react-native";
import { getproducts } from "../api/products";
import { IconButton, MD3Colors, Button, List } from "react-native-paper";
import { Card, Title, Paragraph } from "react-native-paper";
import { AntDesign } from "@expo/vector-icons";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { getData, removeData, setData } from "../helpers/async.storage";
import { StackActions } from "@react-navigation/native";
const Home = ({ navigation }) => {
  const [id,setId] = useState(-1);
  const [task, setTask] = useState("");
  const [description, setDescription] = useState("");
  const [taskss, setTaskss] = useState([]);
  //   var taskss = []
  const createTask = () => {};
  async function getTasks() {
    setTaskss([]);
    const data = await JSON.parse(await getData("task"));
    // console.log(data)
    // console.log( Array.from(JSON.parse(data)))
    for (var a of JSON.parse(data)) {
      console.log(a);
      setTaskss((taskss) => [...taskss, a]);
      console.log(taskss);
    }
    console.log(taskss);
    console.log("tomando data");

    // setData(JSON.parse(data).Array)
  }
  async function deleteTask(item){
    taskss.forEach((val)=>{
      
      if(val === item){
        taskss.splice(taskss.indexOf(val),1)
      }
      
    })
    console.log(taskss)
    setData("task",JSON.stringify(taskss))
    getTasks()
    console.log(item)
  }
  async function editTask(item){
    
    setTask(item.task)
    setDescription(item.task)
    
  }
  async function updateTask(){
    
    console.log("index "+ id)
    taskss[id] = {id:task,task:task,description:description}
    setData("task",JSON.stringify(taskss));
    getTasks();
  }
  var tasks = [
    {
      id: 1,
      task: "lorem ipsum",
      description:
        "lorem impsusdakj alsjdlas jdlaj ldjlask jdklasjd askld jasjd lasj dklasj kdjaslk ",
    },
    {
      id: 2,
      task: "lorem ipsum",
      description:
        "lorem impsusdakj alsjdlas jdlaj ldjlask jdklasjd askld jasjd lasj dklasj kdjaslk ",
    },
    {
      id: 3,
      task: "lorem ipsum",
      description:
        "lorem impsusdakj alsjdlas jdlaj ldjlask jdklasjd askld jasjd lasj dklasj kdjaslk ",
    },
    {
      id: 4,
      task: "lorem ipsum",
      description:
        "lorem impsusdakj alsjdlas jdlaj ldjlask jdklasjd askld jasjd lasj dklasj kdjaslk ",
    },
  ];
  const sheetRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const handleSnapPress = useCallback((index) => {
    sheetRef.current?.snapToIndex(index);
    setIsOpen(true);
    
  }, []);
  const snapPoints = ["70%"];
  useEffect(() => {
    getTasks();
  }, []);
  return (
    <View className="flex flex-1 bg-gray-200 px-4 py-5">
      <View className="absolute bottom-10 right-10  rounded-full p-1">
        <AntDesign
          name="pluscircle"
          size={35}
          color="black"
          onPress={() => {
            
            handleSnapPress(0);
          }}
        />
      </View>

      <IconButton
        icon="logout"
        iconColor={MD3Colors.error50}
        size={30}
        onPress={() => {
          
          removeData("user");
          navigation.dispatch(StackActions.replace("Login"));
        }}
      />

      {taskss.map((item) => {
        return (
          <List.Item
            title={item.task}
            onPress={() => {
             editTask(item)
              handleSnapPress(0);
              setId(taskss.indexOf(item))
              console.log("ditar")
              console.log(id)
            }}
            description={item.description}
            right={(props) => (
              <IconButton
                icon="delete"
                iconColor={MD3Colors.neutral0}
                size={20}
                onPress={() => {
                  deleteTask(item)
                  console.log("eliminar");
                }}
              />
            )}
          />
        );
      })}
      <BottomSheet
        ref={sheetRef}
        snapPoints={snapPoints}
        enablePanDownToClose={true}
      >
        <BottomSheetView>
          <View className="flex h-screen bg-gray-300 rounded-t-3xl  items-center pt-10">
            <Text className="font-semibold text-2xl">Crear Tarea</Text>
            <TextInput
              placeholder="Tarea"
              className="my-5  p-4 bg-white w-80  rounded-lg"
              defaultValue={task}
              onChangeText={(el) => {
                setTask(el);
              }}
            ></TextInput>
            <TextInput
              numberOfLines={5}
              placeholder="Descripción"
              defaultValue={description}
              className="my-5  p-4 bg-white w-80  rounded-lg"
              onChangeText={(el) => {
                setDescription(el);
              }}
            ></TextInput>

            <TouchableOpacity
              onPress={async () => {
                if(id != -1){
                  console.log("editando")
                  updateTask();
                  return;
                }
                var arra = taskss;
                var t = { id:task,task: task, description: description };
                arra.push(t);
                setTaskss(arra);

                await setData("task", JSON.stringify(taskss));
                console.log(taskss);
                console.log("rray");
                getTasks();
              }}
              className="my-5 flex rounded-lg  p-4 w-80 bg-orange-500 justify-center items-center "
            >
              <Text className="text-white">Guardar</Text>
            </TouchableOpacity>
          </View>
        </BottomSheetView>
      </BottomSheet>
    </View>
  );
};

export default Home;
