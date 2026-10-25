import axios from 'axios';
const api=axios.create({baseURL:`${import.meta.env.VITE_API_URL}/api`});
api.interceptors.request.use(config=>{const token=localStorage.getItem('token');if(token)config.headers.Authorization=`Bearer ${token}`;return config;});
export const billingApi={
 plans:()=>api.get('/billing/plans'),
 trial:plan_id=>api.post('/billing/trial',{plan_id}),
 create:data=>api.post('/billing/create',data),
 verify:data=>api.post('/billing/verify',data),
 current:()=>api.get('/billing/current'),
 history:page=>api.get('/billing/history',{params:{page}}),
 cancel:()=>api.post('/billing/cancel')
};
