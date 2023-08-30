import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";

const HeadingBar = styled(AppBar)`
  z-index: 1201;
  background-color: #fff;
  height: 52px;
  box-shadow: inset 0 -1px 0 0 #dadce0;
  color: black;
`;

const Heading = styled(Typography)`
  color: #5f6368;
  font-size: 24px;
  margin-left: 15px;
`;

function HeaderBar({ open, handleDrawer }) {
  const logo =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAe1BMVEX/////ugD/lQD/ymH/wj7/vAD/twD/uAD/mgD/lgD/tQD/wDT/uxL/6sj/1KT/9eb/jwD/5rH/+/D/y1f/7MX/1n//yUz/wCr/3I//zmf/46r/8NH/6r7/zV3/9d3/0m3/3Jf/0HT/47X//PT/4KH/9Nr/1X3/5Kv/wT2QilJ7AAADkUlEQVR4nO3dbVPaQBSGYVdht11okQBGBBGN2v7/X9hYp3Y6Q9hzyr48i8/93TNzTQJ5IVkvLhhjjDHGGGOMMcYYY4wxxhhjjLHP0nJ1MzqtyffShmPNx96dmrnGJTb33pmTG1/CEruJPd3XC7/CEhdRgG9CUOLcRwH+FmIS2wifwQ8hInETZx/9IwQk3kYW4hHXkXbSDyEc8Sq6EI2YQAhGTCHEIiYRQhHTCJGIiYRAxFRCHGIyIQwxnRCFmFAIQkwpxCAmFUIQ0woRiImFAMTUwvLE5MLixPTC0sQMwsLEHMKyxCzCosQ8wpLETMKCxFzCcsRswmLEfMJSxIzCQsScwjLEeMIwsAwxnvCLpMv8xGhCM5Zk7isWinJXFFJIIYUUUkghhRRmE74/FXymQuesNdO2bafGWTUTX+j8dH23mXX9X3a7zd16qnyAGl3o/GLb/fPnzVb3kDi2sPftDkzYaYzQQtsuB2YsW/FDqshC/9ANDukepA+LAwv9/uiYvZCIK/TPgTnPsh0VVhgE9kTRVkQV2kfBpEfJVgQVulY0SvLmBqjQvohGvQg2IqbQroSzXsNETKGZCWfNKt2GTroJ+40YHoYo9IdORg+3C+6miELhF+l7wa9TRKHdK6btQxsRUeg3immb0IkNotCpxlW4l6o+huEPIqJQ96PtokKh5KT7b48VCuXH+7dWFQpfVeNCZzWIwrVqXOi1YkThSDVuVKFwrBo3rk9ofKOY1tR4TuPnimnBRTYQhaqvmuD6BYhC1YlpnVfAVr6bzqu8AtYcL0LHClChsVvhrG2t99rEF1CCW8KYQmNvRaMkS92ACmV3MoJ3MJCFTnBTuDGiSaBC4ybDPwC/18hW1IIV9t82x09PhUBgoXHTY5/FTeiaogKhcW74d+Bn8bNRyML+oDEd6kyep4kShRRSSOGnFw6vknwmQjcZ6lyOh4N3ToN3SasRDl1CzSikMGkUUvgWhdUI7dO3wz3J1wTHFhrrD6dY9BxcGCEKKaSQQgoppJBCCimkkEIKKaSQQgoppJBCCimkkEIKKaxY+JBZqHutOEbR/qezLOHrNzGL9n+5hULNOiKRUjx2d3rKVTbiFHx1N2aql4qjtci3n9pFCeBFN8lFtMG3pxLVLJRL5f5fzt9rXu2P2w/jB59wjpUfF/kMfrR8vfk5StjNamgBW8YYY4wxxhhjjDHGGGOMMcYYY+z8+gWBpGlHicVAyQAAAABJRU5ErkJggg==";
  return (
    <div>
      <HeadingBar open={open}>
        <Toolbar>
          <IconButton
            onClick={handleDrawer}
            edge="start"
            sx={{
              marginRight: 5,
            }}
          >
            <MenuIcon />
          </IconButton>
          <img src={logo} alt="logo" style={{ width: 39 }} />
          <Heading>Keep</Heading>
        </Toolbar>
      </HeadingBar>
    </div>
  );
}
export default HeaderBar;
