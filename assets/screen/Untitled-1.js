{
    // for columns
    // const [zero, setZero] = useState();
    // const [thirty2, setThirty2] = useState();
    // const [thirty3, setThirty3] = useState();
    // const [thirty4, setThirty4] = useState();
    // const [thirty5, setThirty5] = useState(2);
    //button number
    // const select0 = () => {};
    // const select1 = () => {};
    // const select2 = () => {};
    // const select3 = () => {};
    // const select4 = () => {};
    // const select5 = () => {};
    //Empty value
    // const store1 = () => {};
    // const store2 = () => {};
    // ---------------------------------------------------------------
    /* <View>
              <Text style={{fontSize:30, padding:20}}>SUDOKU</Text>
          </View>
        <View style={{flexDirection: 'row'}}>
          <View style={{borderWidth: 2, borderColor: 'skyblue'}}>
            <View style={{flexDirection: 'row'}}>
              <Button onPress = {store1} name={zero} />
              <Button onPress ={store2} name={one} />
              <Button name={two} externalStyle={{borderRightWidth: 0}} />
            </View>
            <View style={{flexDirection: 'row'}}>
              <Button name={three} />
              <Button name={four} />
              <Button name={five} externalStyle={{borderRightWidth: 0}} />
            </View>
            <View style={{flexDirection: 'row'}}>
              <Button name={six} externalStyle={{borderBottomWidth: 0}} />
              <Button name={seven} externalStyle={{borderBottomWidth: 0}} />
              <Button
                name={eight}
                externalStyle={{borderBottomWidth: 0, borderRightWidth: 0}}
              />
            </View>
          </View>
  
          <View style={{borderWidth: 2, borderColor: 'skyblue'}}>
            <View style={{flexDirection: 'row'}}>
              <Button name={nine} />
              <Button name={ten} />
              <Button name={eleven} externalStyle={{borderRightWidth: 0}} />
            </View>
            <View style={{flexDirection: 'row'}}>
              <Button name={twile} />
              <Button name={thirteen} />
              <Button name={fourteen} externalStyle={{borderRightWidth: 0}} />
            </View>
            <View style={{flexDirection: 'row'}}>
              <Button name={fifteen} externalStyle={{borderBottomWidth: 0}} />
              <Button name={sixteen} externalStyle={{borderBottomWidth: 0}} />
              <Button
                name={seventeen}
                externalStyle={{borderRightWidth: 0, borderBottomWidth: 0}}
              />
            </View>
          </View>
          <View style={{borderWidth: 2, borderColor: 'skyblue'}}>
            <View style={{flexDirection: 'row'}}>
              <Button name={nine} />
              <Button name={ten} />
              <Button name={eleven} externalStyle={{borderRightWidth: 0}} />
            </View>
            <View style={{flexDirection: 'row'}}>
              <Button name={twile} />
              <Button name={thirteen} />
              <Button name={fourteen} externalStyle={{borderRightWidth: 0}} />
            </View>
            <View style={{flexDirection: 'row'}}>
              <Button name={fifteen} externalStyle={{borderBottomWidth: 0}} />
              <Button name={sixteen} externalStyle={{borderBottomWidth: 0}} />
              <Button
                name={seventeen}
                externalStyle={{borderRightWidth: 0, borderBottomWidth: 0}}
              />
            </View>
          </View>
        </View>
        <View style={{flexDirection: 'row'}}>
          <View style={{borderWidth: 2, borderColor: 'skyblue'}}>
            <View style={{flexDirection: 'row'}}>
              <Button name={eighteen} />
              <Button name={nineteen} />
              <Button name={twenty} externalStyle={{borderRightWidth: 0}} />
            </View>
            <View style={{flexDirection: 'row'}}>
              <Button name={twenty1} />
              <Button name={twenty2} />
              <Button name={twenty3} externalStyle={{borderRightWidth: 0}} />
            </View>
            <View style={{flexDirection: 'row'}}>
              <Button name={twenty4} externalStyle={{borderBottomWidth: 0}} />
              <Button name={twenty5} externalStyle={{borderBottomWidth: 0}} />
              <Button
                name={twenty6}
                externalStyle={{borderBottomWidth: 0, borderRightWidth: 0}}
              />
            </View>
            
          </View>
  
          <View style={{borderWidth: 2, borderColor: 'skyblue'}}>
            <View style={{flexDirection: 'row'}}>
              <Button name={twenty7} externalStyle={{borderLeftWidth: 0}} />
              <Button name={twenty8} />
              <Button name={twenty9} externalStyle={{borderRightWidth: 0}} />
            </View>
            <View style={{flexDirection: 'row'}}>
              <Button name={thirty} />
              <Button name={thirty1} />
              <Button name={thirty2} externalStyle={{borderRightWidth: 0}} />
            </View>
            <View style={{flexDirection: 'row'}}>
              <Button name={thirty3} externalStyle={{borderBottomWidth: 0}} />
              <Button name={thirty4} externalStyle={{borderBottomWidth: 0}} />
              <Button
                name={thirty5}
                externalStyle={{borderRightWidth: 0, borderBottomWidth: 0}}
              />
            </View>
          </View>
          <View style={{borderWidth: 2, borderColor: 'skyblue'}}>
            <View style={{flexDirection: 'row'}}>
              <Button name={twenty7} externalStyle={{borderLeftWidth: 0}} />
              <Button name={twenty8} />
              <Button name={twenty9} externalStyle={{borderRightWidth: 0}} />
            </View>
            <View style={{flexDirection: 'row'}}>
              <Button name={thirty} />
              <Button name={thirty1} />
              <Button name={thirty2} externalStyle={{borderRightWidth: 0}} />
            </View>
            <View style={{flexDirection: 'row'}}>
              <Button name={thirty3} externalStyle={{borderBottomWidth: 0}} />
              <Button name={thirty4} externalStyle={{borderBottomWidth: 0}} />
              <Button
                name={thirty5}
                externalStyle={{borderRightWidth: 0, borderBottomWidth: 0}}
              />
            </View>
          </View>
        </View>
        <View style={{flexDirection: 'row'}}>
          <View style={{borderWidth: 2, borderColor: 'skyblue'}}>
            <View style={{flexDirection: 'row'}}>
              <Button onPress = {store1} name={zero} />
              <Button onPress ={store2} name={one} />
              <Button name={two} externalStyle={{borderRightWidth: 0}} />
            </View>
            <View style={{flexDirection: 'row'}}>
              <Button name={three} />
              <Button name={four} />
              <Button name={five} externalStyle={{borderRightWidth: 0}} />
            </View>
            <View style={{flexDirection: 'row'}}>
              <Button name={six} externalStyle={{borderBottomWidth: 0}} />
              <Button name={seven} externalStyle={{borderBottomWidth: 0}} />
              <Button
                name={eight}
                externalStyle={{borderBottomWidth: 0, borderRightWidth: 0}}
              />
            </View>
          </View>
  
          <View style={{borderWidth: 2, borderColor: 'skyblue'}}>
            <View style={{flexDirection: 'row'}}>
              <Button name={nine} />
              <Button name={ten} />
              <Button name={eleven} externalStyle={{borderRightWidth: 0}} />
            </View>
            <View style={{flexDirection: 'row'}}>
              <Button name={twile} />
              <Button name={thirteen} />
              <Button name={fourteen} externalStyle={{borderRightWidth: 0}} />
            </View>
            <View style={{flexDirection: 'row'}}>
              <Button name={fifteen} externalStyle={{borderBottomWidth: 0}} />
              <Button name={sixteen} externalStyle={{borderBottomWidth: 0}} />
              <Button
                name={seventeen}
                externalStyle={{borderRightWidth: 0, borderBottomWidth: 0}}
              />
            </View>
          </View>
          <View style={{borderWidth: 2, borderColor: 'skyblue'}}>
            <View style={{flexDirection: 'row'}}>
              <Button name={nine} />
              <Button name={ten} />
              <Button name={eleven} externalStyle={{borderRightWidth: 0}} />
            </View>
            <View style={{flexDirection: 'row'}}>
              <Button name={twile} />
              <Button name={thirteen} />
              <Button name={fourteen} externalStyle={{borderRightWidth: 0}} />
            </View>
            <View style={{flexDirection: 'row'}}>
              <Button name={fifteen} externalStyle={{borderBottomWidth: 0}} />
              <Button name={sixteen} externalStyle={{borderBottomWidth: 0}} />
              <Button
                name={seventeen}
                externalStyle={{borderRightWidth: 0, borderBottomWidth: 0}}
              />
            </View>
          </View>
        </View>
        <View style={{marginTop: '8%', flexDirection: 'row'}}>
         
          <Button
            name={value1}
            onPress={select1}
            externalStyle={{
              borderRightWidth: 0,
              borderBottomWidth: 0,
              padding: 2, 
              width:55,
              
              height: 62,
            }}
            style2={{borderWidth: 1}}
          />
          <Button
            name={value2}
            onPress={select2}
            externalStyle={{
              borderRightWidth: 0,
              borderBottomWidth: 0,
              padding: 2, 
              width:55,
              
              height: 62,
            }}
            style2={{borderWidth: 1}}
          />
          <Button
            name={value3}
            onPress={select3}
            externalStyle={{
              borderRightWidth: 0,
              borderBottomWidth: 0,
              padding: 2, 
              width:55,
              
              height: 62,
            }}
            style2={{borderWidth: 1}}
          />
          <Button
            name={value4}
            onPress={select4}
            externalStyle={{
              borderRightWidth: 0,
              borderBottomWidth: 0,
              padding: 2, 
              width:55,
              
              height: 62,
            }}
            style2={{borderWidth: 1}}
          />
          <Button
            name={value5}
            onPress={select5}
            externalStyle={{
              borderRightWidth: 0,
              borderBottomWidth: 0,
              padding: 2, 
              width:55,
              
              height: 62,
            }}
            style2={{borderWidth: 1}}
          />
      
           <Button
            name={value6}
            onPress={select0}
            externalStyle={{
              borderRightWidth: 0,
              borderBottomWidth: 0,
              padding: 2, 
              width:55,
              
              height: 62,
            }}
            style2={{borderWidth: 1}}
          />
          </View>
          <View style={{flexDirection:'row'}}>
          
          <Button
            name={value7}
            onPress={select0}
            externalStyle={{
              borderRightWidth: 0,
              borderBottomWidth: 0,
              padding: 2, 
              width:55,
              
              height: 62,
            }}
            style2={{borderWidth: 1}}
          />
          <Button
            name={value8}
            onPress={select0}
            externalStyle={{
              borderRightWidth: 0,
              borderBottomWidth: 0,
              padding: 2, 
              width:55,
              
              height: 62,
            }}
            style2={{borderWidth: 1}}
          />
        
        <Button
            name={value9}
            onPress={select0}
            externalStyle={{
              borderRightWidth: 0,
              borderBottomWidth: 0,
              padding: 2, 
              width:55,
              
              height: 62,
            }}
            style2={{borderWidth: 1}}
          />
          
          </View> */
  }
  

  // -------------------------------------------------
    //for row and column
  //Row1
  // const [one, setOne] = useState();
  // const [five1 , setFive1] = useState(5);
  // const [two, setTwo] = useState();
  // const [nine1 , setNine1] = useState(9)
  // const [three, setThree] = useState();
  // const [four, setFour] = useState();
  // const [five, setFive] = useState();
  // const [six, setSix] = useState();
  // const [seven, setSeven] = useState();
  //Row2
  
  // const [ eight1 , setEight1] = useState(8)
  // const [eight, setEight] = useState();
  // const [nine, setNine] = useState();
  // const [ten, setTen] = useState();
  // const [eleven1 , setEleven1] = useState(4);
  // const [eleven, setEleven] = useState();
  // const [twile, setTwile] = useState();
  // const [thirteen1, setThirteen] = useState(13);
  // const [fourteen, setFourteen] = useState();
  // const [fifteen1, setFifteen] = useState(7);
  //Row3
  // const [sixteen, setSixteen] = useState();
  // const [seventeen, setSeventeen] = useState();
  // const [eighteen, setEighteen] = useState();
  // const [nineteen1 , setNineteen1] = useState(2)
  // const [nineteen2 , setNineteen2] = useState(8);
  // const [nineteen, setNineteen] = useState();
  // const [twenty, setTwenty] = useState();
  // const [twenty1, setTwenty1] = useState();