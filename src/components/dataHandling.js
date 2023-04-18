import { useQuery,queryClient,useQueryClient,useMutation } from 'react-query';
import axios from 'axios';



export const slider=[
   {src:"./images/banner1.jpg",desc:"Recotap is an AI-driven Account-Based Marketing (ABM) platform that helps B2B Marketers run targeted ABM campaigns, at scale.",siteName:"Recotap",link:"https://www.recotap.com",title:"Recotap"},
   {src:"./images/banner2.jpg",desc:"Powered by first party shopper behavioral data and advanced AI technology, it’s the digital engagement platform for next-generation vehicle retailing and it’s available today",siteName:"Impel",link:"https://impel.io",title:"Impel"},
   {src:"./images/banner3.jpg",desc:"The app used by tens of thousands to relieve consistent pain. Try Curable for Free. Therapy by pain scientists and patients. Your road to relief starts today. 70% say symptoms reduced.",siteName:"Curable",link:"https://curable.care",title:"Curable"},
   {src:"./images/banner4.jpeg",desc:"Biolage is recognized worldwide as a leader in the professional hair care field, and that reputation continues to grow.",siteName:"Biolage",link:"https://www.biolage.com",title:"Biolage"},
   {src:"./images/banner5.jpeg",desc:"When the Group was formed in 2009 it brought together many well-known brands including Lloyds, Halifax, Bank of Scotland and Scottish Widows – with a combined history stretching back more than 300 years",siteName:"Lloydsbankinggroup",link:"https://www.lloydsbankinggroup.com",title:"Lloydsbankinggroup"}
 ]

 export const projectSlier =[
   {id:0, src:"./images/slider1.jpg"},
   {id:1,src:"./images/slider2.jpg"},
   {id:2,src:"./images/slider3.jpg"},
   {id:3,src:"./images/slider4.jpg"},
   {id:4,src:"./images/slider5.jpg"},
 ];


const fetchSkills = ()=>{
    return axios.get('http://localhost:8000/skills')   
 }

 export const GetSkills = (onSuccess,onError)=>{
    return useQuery('user-skills',fetchSkills)    
 }

 const fetchCustomer = ()=>{
   return axios.get('http://localhost:8000/customer')  
}

export const GetCustomersList = (onSuccess,onError)=>{
   const queryClient = useQueryClient()
   return useQuery('customer-list',fetchCustomer,{
      onSuccess:()=>{
         queryClient.invalidateQueries('customer-list')
      },

   })    
}

const fetchTestimonial = () =>{
   return axios.get('http://localhost:8000/testtimonial')
}

export const GetTestimonial = (onError, onSuccess) =>{
   return useQuery('testimonial',fetchTestimonial)
}

const fetchAbout = () =>{
   return axios.get('http://localhost:8000/aboutus')
}

export const GetAbout = () => {
   const queryClient = useQueryClient()
   return useQuery('aboutus',fetchAbout,{
      onSuccess:()=>{
         queryClient.invalidateQueries('aboutus')
      },
   })
}

const fetchProjectDetails = () =>{
   return axios.get('http://localhost:8000/myProject')
}

export const GetProjectDetails = () => {
   const queryClient = useQueryClient()
   return useQuery('myProject',fetchProjectDetails,{
      onSuccess:()=>{
         queryClient.invalidateQueries('myProject')
      },
   })
}

const fetchTopSkills = () =>{
   return axios.get('http://localhost:8000/myTopSkills')
}

export const GetTopSkills = () => {
   const queryClient = useQueryClient()
   return useQuery('topSkills',fetchTopSkills,{
      onSuccess:()=>{
         queryClient.invalidateQueries('topSkills')
      },
   })
}

// const fetchContsctDetails = (obj) =>{
//    return axios.post('http://localhost:8000/contact',+obj)
// }


