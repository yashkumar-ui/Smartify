import React, { useContext } from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Switch from '@mui/material/Switch';
import Slider from '@mui/material/Slider';
import { styled } from '@mui/material/styles';
import { SliderContext, SliderContextType } from "../context/SliderContext";

const marks = [
    { value: 5, label: <><strong>$5</strong><br />500 credits</>, position: 'end' },
    { value: 10, label: <><strong>$10</strong><br />1200 credits</>, position: 'end' },
    { value: 15, label: <><strong>$15</strong><br />1700 credits</>, position: 'end' },
    { value: 20, label: <><strong>$20</strong><br />2500 credits</>, position: 'end' },
    { value: 25, label: <><strong>$25</strong><br />3900 credits</>, position: 'end' },
    { value: 30, label: <><strong>$30</strong><br />5000 credits</>, position: 'end' },
  ];

  const ColorButton = styled(Button) ({
    color:'#fff',
    backgroundColor: '#9747FF',
    padding:'0.7rem',
    borderRadius:'0.70rem',
    textTransform:'none',
    fontWeight:'bold',
    letterSpacing:'0.8px',
    '&:hover': {
      backgroundColor:'#ab6bff' ,
    },
  });
  

const AntSwitch = styled(Switch)(({ theme }) => ({
    width: 28,
    height: 16,
    padding: 0,
    display: 'flex',
    '&:active': {
      '& .MuiSwitch-thumb': {
        width: 15,
      },
      '& .MuiSwitch-switchBase.Mui-checked': {
        transform: 'translateX(9px)',
      },
    },
    '& .MuiSwitch-switchBase': {
      padding: 2,
      '&.Mui-checked': {
        transform: 'translateX(12px)',
        color: '#fff',
        '& + .MuiSwitch-track': {
          opacity: 1,
          backgroundColor: theme.palette.mode === 'dark' ? '#177ddc' : '#24AE9D',
        },
      },
    },
    '& .MuiSwitch-thumb': {
      boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
      width: 12,
      height: 12,
      borderRadius: 6,
      transition: theme.transitions.create(['width'], {
        duration: 200,
      }),
    },
    '& .MuiSwitch-track': {
      borderRadius: 16 / 2,
      opacity: 1,
      backgroundColor:
        theme.palette.mode === 'dark' ? 'rgba(255,255,255,.35)' : 'rgba(0,0,0,.25)',
      boxSizing: 'border-box',
    },
  }));

  const PrettoSlider = styled(Slider)({
    color: '#EEEEEE',
    height: 8,
    '& .MuiSlider-track': {
      border: 'none',
      color:'#9747FF',
    },
    '& .MuiSlider-thumb': {
      height: 20,
      width: 20,
      backgroundColor: '#fff',
      border: '5px solid #9747FF',
      '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
        boxShadow: 'inherit',
      },
      '&::before': {
        display: 'none',
      },
    },
    
  });


const AutoTopUpSettings : React.FC  = () => {
    const {autoTopUp , creditAmount , creditValue , handleSliderValue , toggleAutoTopUp} = useContext(SliderContext) as SliderContextType;

    const handleSliderChange = (_event : Event , newValue : number | number[]) => {
        // update slider value
        if( typeof newValue === 'number'){
            handleSliderValue(newValue);
        }
    }

    // on submit 
    const handleButtonClick = () => {
        console.log(" selected credit amount is " + creditValue)
    }

    return(
        <Box borderRadius={4} display={'flex'} flexDirection={'column'} alignItems={'start'} justifyContent={'start'}  bgcolor={"white"} width={'1000px'} height={'fit-content'} padding={5} sx={{
            '@media (max-width: 960px)': { 
                width: '80%',
            }
        }}
         >
            <div>
                <div className='flex gap-3 items-center '>
                    <p className='font-semibold text-[20px] tracking-wider '>Setup Auto Top-up</p>
                    <AntSwitch checked={autoTopUp} onChange={(e) => {toggleAutoTopUp(e.target.checked)}} />
                </div>

            </div>
             
             {/* if value then we will show the slider  */}
             { autoTopUp && <>
                <p className='pt-[0.5rem]  text-[#7B7B7B] font-light'>Once the credit goes below a minimum thresold <span className='text-[#9747FF] font-bold'>50</span> , we will auto-purchase <span className='font-bold text-[#9747FF]'>{` ${creditValue} credits`}</span> credits and add them to your account . <span className='font-semibold cursor-pointer underline'>Learn more</span> </p>
                <Box className="p-2  sm:rotate-0  flex flex-col sm:flex-row  items-center sm:items-start  w-full" sx={{
                            px: { xs: 1, md: 6 },
                            mt: { xs: 1, md: 2 },
                            // display: 'flex',
                            // flexDirection: isMobile ? 'column' : 'row',
                            // alignItems: isMobile ? 'center' : 'flex-start',
                        }}>
                   <PrettoSlider
                      aria-label="pretto slider"
                      value={creditAmount}
                      onChange={(handleSliderChange)}
                      step={null}
                      marks={marks}
                      min={5}
                      max={30}
                    
                      // disabled={!switchChecked}
                     />
                </Box>

                <div className='mt-[3rem] hover:scale-95 transition-all duration-200'>
                    <ColorButton variant="text" onClick={handleButtonClick}>
                       Confirm auto-purchase
                    </ColorButton>

                 </div>
             

             </>}
        </Box>
    )
}

export default AutoTopUpSettings;