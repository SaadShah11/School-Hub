import NavBar from "./NavBar";
import './SchoolFee.css'
import Footer from "./footer/Footer"
import BootstrapTable from 'react-bootstrap-table-next';

export default function schoolprofile(){
    const data = [
        {id: 'Admission Fee', name: '==', value: '=='},
        {id: 'Tution Fee', name: '==', value: '=='},
        {id: 'Exam Fee', name: '==', value: '=='},
        {id: 'Sport Fee', name: '==', value: '=='},
        {id: 'Lab Fee', name: '==', value: '=='},
        {id: 'Library Fee', name: '==', value: '=='},
        {id: 'Total Admission Fee', name: '==', value: '=='},
        {id: 'Total Monthly Fee', name: '==', value: '=='},  
      ];
      const columns = [{
        dataField: 'id',
        text: 'Description'
          
      }, {
        dataField: 'name',
        text: 'Junior',
        headerStyle: (colum, colIndex) => {
            return { justifyContent: 'center'};
          }
      }, {
        dataField: 'value',
        text: 'Higher',
        
      },{
        dataField: 'value',
        text: 'College',
        
      }];

    return <div className='main'>
        <div> <NavBar/> </div>
        <div className="table">
            <BootstrapTable keyField='id' data={ data } columns={ columns } />
        </div>
        <div className="footer"><Footer /></div>
        
        
    </div>
}