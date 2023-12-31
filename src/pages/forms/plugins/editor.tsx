// material-ui
import { useTheme } from '@mui/material/styles';
import { Grid } from '@mui/material';

// project-imports
import ReactDraft from 'sections/forms/plugins/ReactDraft';
import ReactQuill from 'sections/forms/plugins/ReactQuill';
import MainCard from 'components/MainCard';

// ==============================|| PLUGIN - EDITOR ||============================== //

const Editor = () => {
  const theme = useTheme();

  return (
    <Grid container spacing={3}>
      <Grid
        item
        xs={12}
        sx={{
          '& .rdw-editor-wrapper': {
            bgcolor: theme.palette.background.paper,
            border: '1px solid',
            borderColor: theme.palette.divider,
            borderRadius: '4px',
            overflow: 'hidden',
            '& .rdw-editor-main': {
              px: 2,
              py: 0.5,
              border: 'none'
            },
            '& .rdw-editor-toolbar': {
              pt: 1.25,
              border: 'none',
              borderBottom: '1px solid',
              borderColor: theme.palette.divider,
              bgcolor: theme.palette.mode === 'dark' ? 'dark.light' : 'secondary.lighter',
              '& .rdw-option-wrapper': {
                bgcolor: theme.palette.mode === 'dark' ? 'dark.light' : 'secondary.lighter',
                borderColor: theme.palette.divider
              },
              '& .rdw-dropdown-wrapper': {
                bgcolor: theme.palette.mode === 'dark' ? 'dark.light' : 'secondary.lighter',
                borderColor: theme.palette.divider,
                '& .rdw-dropdown-selectedtext': {
                  color: theme.palette.mode === 'dark' ? theme.palette.secondary[100] : 'secondary.darker'
                },
                '& .rdw-dropdownoption-default': {
                  color: theme.palette.mode === 'dark' ? theme.palette.secondary[100] : 'secondary.darker'
                }
              }
            }
          }
        }}
      >
        <MainCard title='React Draft'>
          <ReactDraft />
        </MainCard>
      </Grid>
      <Grid
        item
        xs={12}
        sx={{
          '& .quill': {
            bgcolor: theme.palette.mode === 'dark' ? 'dark.main' : 'secondary.lighter',
            borderRadius: '4px',
            '& .ql-toolbar': {
              bgcolor: theme.palette.mode === 'dark' ? 'dark.light' : 'secondary.100',
              borderColor: theme.palette.divider,
              borderTopLeftRadius: '4px',
              borderTopRightRadius: '4px'
            },
            '& .ql-container': {
              borderColor: `${theme.palette.divider} !important`,
              borderBottomLeftRadius: '4px',
              borderBottomRightRadius: '4px',
              '& .ql-editor': {
                minHeight: 135
              }
            }
          }
        }}
      >
        <MainCard title='React Quill'>
          <ReactQuill />
        </MainCard>
      </Grid>
    </Grid>
  );
};

export default Editor;
