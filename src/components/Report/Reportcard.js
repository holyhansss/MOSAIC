import React, { useRef } from 'react';
import {Box} from '@mui/material';
import Typography from '@mui/material/Typography';
import Nav from 'react-bootstrap/Nav';


function Reportcard({title, writer, date, inve, poli, mac}) {

  const inputinvest = useRef([]);
  const inputmacro = useRef([]);
  const inputpolicy = useRef([]);


  return (
    <div>
      <Box sx={{
        position: 'fixed',
        top: 160,
        left: 15,
        width: 1/6 
      }}>
        <div>
          <Nav className="flex-column">
            <Nav.Link onClick={()=>{inputinvest.current.scrollIntoView({behavior: "smooth"})}}>
              <Typography variant="subtitle2"  >
                거시경제
              </Typography>
            {inve.map((invem, index) =>(
                      <div key={index}>
                <Typography variant="caption" sx={{ lineHeight: 0}}>
                  - {invem.title}
                </Typography>
                      </div>
                    ))}
            </Nav.Link>

            <Nav.Link onClick={()=>{inputpolicy.current.scrollIntoView({behavior: "smooth"})}}>
              <Typography variant="subtitle2">
                크립토 규제/정책
              </Typography>
            {poli.map((polic, index) =>(
                      <div key={index}>
                <Typography variant="caption" sx={{ lineHeight: 0}}>
                  - {polic.title}
                </Typography>
                      </div>
                    ))}
            </Nav.Link>

            <Nav.Link onClick={()=>{inputmacro.current.scrollIntoView({behavior: "smooth"})}}>
              <Typography variant="subtitle2"  >
                크립토 기술/투자 이슈
              </Typography>
            {mac.map((ma, index) =>(
                      <div key={index}>
                <Typography variant="caption" sx={{ lineHeight: 0}} >
                 - {ma.title}
                </Typography>
                      </div>
                    ))}
            </Nav.Link>
          </Nav>
        </div>
      </Box>
      

          <Typography variant="h3" align='center'>
            {title}
          </Typography>
          <p/>
          <Typography variant="caption" display="block" align="center" gutterBottom>
            {date}
          </Typography>
          <p/>            

          <Box sx={{
            paddingTop: 10
          }}/>

          <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: 'bold', m: 1 }} ref={inputinvest}>
            거시경제
          </Typography>
          <Box sx={{
            paddingTop: 6
          }}/>

          <p/>            
          <div>
          {inve.map((invem, index) =>(
            <div key={index}>
              <p/>
            <Typography variant="h6" align="center" gutterBottom component="div">
              {invem.title}
            </Typography>
            <p/>
            <Typography variant="body1" align="center" gutterBottom component="div">
              {invem.content}
            </Typography>
            <p/>
            </div>
          ))}
          </div>
          <Box sx={{
            paddingTop: 10
          }}/>


          <p/>
          <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: 'bold', m: 1 }} ref={inputpolicy}>
            크립토 규제/정책
          </Typography>
          <Box sx={{
            paddingTop: 6
          }}/>

          <p/>
          <div>
          {poli.map((polic, index) =>(
            <div key={index}>
              <p/>
            <Typography variant="h6" align="center" gutterBottom component="div">
              {polic.title}
            </Typography>
            <p/>
            <Typography variant="body1" align="center" gutterBottom component="div">
              {polic.content}
            </Typography>
            <p/>
            </div>
          ))}
          </div>
          <p/>

          <Box sx={{
            paddingTop: 10
          }}/>


          <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: 'bold', m: 1 }} ref={inputmacro}>
            크립토 기술/투자 이슈
          </Typography>

          <Box sx={{
            paddingTop: 6
          }}/>


          <p/>
          <div>
          {mac.map((ma, index) =>(
            <div key={index}>
              <p/>
            <Typography variant="h6" align="center" gutterBottom component="div">
              {ma.title}
            </Typography>
            <p/>
            <Typography variant="body1" align="center" gutterBottom component="div">
              {ma.content}
            </Typography>
            <p/>
            </div>
          ))}
          </div>
          <p/>
          <Box sx={{
            paddingTop: 10
          }}/>

          <div>
          <Typography variant="subtitle1" align="center" gutterBottom component="div" sx={{textDecoration: 'underline'}}>
            Credit
          </Typography>
          </div>
          <Typography variant="subtitle2" align="center" gutterBottom component="div" sx={{ fontWeight: 'bold', m: 1 }}>
            {writer}
          </Typography>
    </div>
  );
}

export default Reportcard;