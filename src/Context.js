import React, { useState, useContext, useEffect} from 'react';
import portfolioData from '../src/data/portfolio-data';
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [navStatus, setNavStatus] = useState(false);
  const[scrollPosition, setScrollPosition] = useState(0)
  const [data, setData] = useState([])


  
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position)
  }

  useEffect(() => {
    setData(portfolioData)
  }, [])
 
  const showAllProjects = (e) => {
    const tabs = document.querySelectorAll('.portfolio-filter-item')
    tabs.forEach(tab =>{
      tab.classList.remove('active');
    })
    setData(portfolioData)
    e.currentTarget.classList.add('active');
    
  }
  
  const showFrontendProjects = (e) => {
    const tabs = document.querySelectorAll('.portfolio-filter-item')
    tabs.forEach(tab =>{
      tab.classList.remove('active');
    })
    const frontend = portfolioData.filter(project => project.category === "frontend")
    setData(frontend);
    e.currentTarget.classList.add('active');
    
  }

  const showDataProjects = (e) => {
    const tabs = document.querySelectorAll('.portfolio-filter-item')
    tabs.forEach(tab =>{
      tab.classList.remove('active');
    })
    const data= portfolioData.filter(project => project.category === "data")
    setData(data);
    e.currentTarget.classList.add('active');
    
  }

  

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, {passive: true})
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    const  dynamicNavbar = () => {
      if (scrollPosition > 56) {
        setNavStatus(true)
      }
      else {
        setNavStatus(false)
      }
    }
    dynamicNavbar()
  }, [scrollPosition])


  return (
    <AppContext.Provider
      value={{
        navStatus,
        data,
        showFrontendProjects,
        showAllProjects,
        showDataProjects

      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };