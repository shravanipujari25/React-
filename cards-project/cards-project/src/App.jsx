import React from 'react'
import Card from './components/Card'

const jobOpenings = [
  {
    brandLogo: "https://imgs.search.brave.com/1NjKNCJLYkxjPLrKnWVPWI9kpKaExy3iB_VnIqxTbJc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNDYv/ODYxLzY0Ny9zbWFs/bC9nb29nbGUtbG9n/by10cmFuc3BhcmVu/dC1iYWNrZ3JvdW5k/LWZyZWUtcG5nLnBu/Zw",
    companyName: "Google",
    datePosted: "5 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: 45,
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://imgs.search.brave.com/98dRkyZ1zeADFpvad5k21xmSSuHXk_AS3K8aLxVI7Cw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/dmVjdG9yc3RvY2su/Y29tL2kvNTAwcC8z/OS84Ny9hbWF6b24t/aWNvbi1ibGFjay1h/bmQtd2hpdGUtdmVj/dG9yLTM0MjQzOTg3/LmpwZw",
    companyName: "Amazon",
    datePosted: "2 weeks ago",
    post: "Backend Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: 60,
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://imgs.search.brave.com/sEVAqcZOgcVNA49r860w7_t35uDx0l9vcWK6KghGnV4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuc3RpY2twbmcu/Y29tL3RodW1icy82/MWZhZTJkMzk1ZTZj/YTAwMDQ3YjRmMTIu/cG5n",
    companyName: "Meta",
    datePosted: "10 days ago",
    post: "React Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: 55,
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://imgs.search.brave.com/MC-3CSRrpVTBVMcBPUwxsjT6BJTCnrJ5l_2uzdxyfpk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/dGFpbG9yYnJhbmRz/LmNvbS93cC1jb250/ZW50L3VwbG9hZHMv/MjAyMS8wMS9hcHBs/ZV9sb2dvXzE5ODgu/anBn",
    companyName: "Apple",
    datePosted: "1 week ago",
    post: "iOS Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: 70,
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://imgs.search.brave.com/28oiMXY7J9wHd_q6KBNl2UYDTiBR0YOwLTl3ecsdI6M/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNDIv/MTY1LzgxMS9zbWFs/bC9uZXRmbGl4LWxv/Z28tdHJhbnNwYXJl/bnQtYmFja2dyb3Vu/ZC1mcmVlLXBuZy5w/bmc",
    companyName: "Netflix",
    datePosted: "3 days ago",
    post: "UI Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: 80,
    location: "Remote, India"
  },
  {
    brandLogo: "https://imgs.search.brave.com/R_nB1PngmkcRATrLLVejmsMOiUoCyjZkvpj1936TU8c/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/ZnJlZXBuZ2xvZ29z/LmNvbS91cGxvYWRz/L21pY3Jvc29mdC1s/b2dvLWltYWdlLTIz/LnBuZw",
    companyName: "Microsoft",
    datePosted: "4 weeks ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: 50,
    location: "Pune, India"
  },
  {
    brandLogo: "https://imgs.search.brave.com/YSYL7U9rmc1WORztPKcdSQuKuU6DqiJSCfSgqh10JT4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly8xMDAw/bG9nb3MubmV0L3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDIxLzA0/L1Rlc2xhLWxvZ28t/NTAweDI4MS5wbmc",
    companyName: "Tesla",
    datePosted: "6 days ago",
    post: "Full Stack Developer",
    tag1: "Contract",
    tag2: "Mid Level",
    pay: 65,
    location: "Remote, India"
  },
  {
    brandLogo: "https://imgs.search.brave.com/ifGAWLasRaIDDWjDlwp3FMWijfSioCMzxA5dFKEAsXE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nbWFydC5jb20v/ZmlsZXMvMjMvT3Jh/Y2xlLUxvZ28tUE5H/LUZpbGUucG5n",
    companyName: "Oracle",
    datePosted: "2 months ago",
    post: "Java Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: 58,
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://imgs.search.brave.com/-ZSVjpMblFqu4QgGFpkpYkzjTV4f02kTcIzWevNiiR4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/ZG93bmxvYWQub3Jn/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDE0/LzA0L2libS1sb2dv/LTAucG5n",
    companyName: "IBM",
    datePosted: "3 weeks ago",
    post: "Cloud Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: 52,
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://imgs.search.brave.com/iC9l7b78_hZJm7bJ4CVLNUv_Bho4kSq8uQe0n4Sr_BU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/dHlwLnVzL2ZpbGUv/c2FsZXNmb3JjZS5z/dmc",
    companyName: "Salesforce",
    datePosted: "8 days ago",
    post: "Platform Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: 68,
    location: "Hyderabad, India"
  }
];



const App = () => {
  return (
    <div className="parent">
      {
        jobOpenings.map((elem, index) => {
          return <Card key={index} job={elem} />
        })
      }
    </div>
  )
}

export default App
