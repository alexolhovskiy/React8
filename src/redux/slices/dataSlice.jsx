import { createSlice } from "@reduxjs/toolkit"


const initialState={
    items:[],
    selectItems:[],

    sizeSelector:[],
    trendSelector:'All',
    priceSelector:0,
    
    sortSelector:'NO',
    showSelector:9,
    
    range:{
        min:Infinity,
        max:-Infinity,
        value:''
    },
    trends:['All'],
    sizes:[{id:Date.now() +1,label:'XXS',checked:false,disable:true},
        {id:Date.now() +2,label:'XS',checked:false,disable:true},
        {id:Date.now() +3,label:'S',checked:false,disable:true},
        {id:Date.now() +4,label:'M',checked:false,disable:true},
        {id:Date.now() +5,label:'L',checked:false,disable:true},
        {id:Date.now() +6,label:'XL',checked:false,disable:true},
        {id:Date.now() +7,label:'XXL',checked:false,disable:true}]
}

const dataSlice=createSlice({
    name:'data',
    initialState,
    reducers:{
        getData:(state,action)=>{
            state.items=action.payload;
            state.items=state.items.map(item=>({...item,id:crypto.randomUUID()}));//Date.now()+Math.round(Math.random()*1000)}));
            
            
            state.items.forEach((item)=>{
                if(item.price<state.range.min){
                    state.range.min=item.price;
                }
                if(item.price>state.range.max){
                    state.range.max=item.price;
                }

                if(!state.trends.includes(item.trend)){
                    state.trends = [...state.trends, item.trend];
                }

                if(!state.sizes.some(size=>size.label===item.size)){
                    state.sizes = state.sizes.map((size) =>
                        size.label === item.size ? { ...size, disable: false } : size
                    );
                }
                    
            });

            state.range.value=(state.range.max-state.range.min)/2;
            state.items.forEach(item=>console.log(item.id));
        },
        setRange:(state,action)=>{
            state.range={...state.range,value:action.payload};
        },
        setSizes:(state,action)=>{
            state.sizes=action.payload;
        },


        setTrendSelector:(state,action)=>{
            state.trendSelector=action.payload;
        },
        setSizeSelector:(state,action)=>{
            state.sizeSelector=action.payload;
        },
        setPriceSelector:(state,action)=>{
            state.priceSelector=action.payload;
        },


        setSortSelector:(state,action)=>{
            state.sortSelector=action.payload;
        },
        setShowSelector:(state,action)=>{
            state.showSelector=action.payload;
        },


        setSelectItems:(state,action)=>{
            state.items=state.items.map(item=>(
                item.id===action.payload?{...item,amount:item.amount-1}:item
            ));
            if(state.selectItems.some(item=>item.id===action.payload)){
                state.selectItems=state.selectItems.map(item=>(
                    item.id===action.payload?{...item,cnt:item.cnt+1}:item
                ))
            }else{
                state.selectItems=[...state.selectItems,{id:action.payload,cnt:1}];
            }
            
            console.log(state.selectItems);
        },

        unsetSelectItems:(state,action)=>{
            state.items=state.items.map(item=>(
                item.id===action.payload?{...item,amount:item.amount+1}:item
            ));
            
            state.selectItems=state.selectItems
            .map(item=>(
                item.id===action.payload?{...item,cnt:item.cnt-1}:item
            ))
            .filter(item=>item.cnt>0);
            console.log(state.selectItems);
        }
    }
});


export const{setSelectItems,setShowSelector,setPriceSelector,getData,setTrendSelector,
            setRange,setSizes,setSizeSelector,setSortSelector,unsetSelectItems}=dataSlice.actions;
export default dataSlice.reducer;