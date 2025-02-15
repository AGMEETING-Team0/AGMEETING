import numeral from 'numeral';
import {
  Badge,
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  List,
  ListItem,
  ListItemText,
  Typography
} from '@material-ui/core';
import ArrowRightIcon from '../../../icons/ArrowRight';
import React from 'react';

const currencies = [
  {
    amount: 21500,
    color: '#6C76C4',
    name: 'US Dollars'
  },
  {
    amount: 15300,
    color: '#33BB78',
    name: 'Bitcoin'
  },
  {
    amount: 1076.81,
    color: '#FF4081',
    name: 'XRP Ripple'
  }
];

const OverviewTotalBalance = (props) => (
  <Card {...props}>
    <CardHeader
      subheader={(
        <Typography
          color="textPrimary"
          variant="h4"
        >
          {numeral(3787681).format('$0,0.00')}
        </Typography>
      )}
      sx={{ pb: 0 }}
      title={(
        <Typography
          color="textSecondary"
          variant="overline"
        >
          Total balance
        </Typography>
      )}
    />
    <CardContent>
      <Divider sx={{ mb: 2 }} />
      <Typography
        color="textSecondary"
        variant="overline"
      >
        Available currency
      </Typography>
      <List
        disablePadding
        sx={{ pt: 2 }}
      >
        {currencies.map((currency) => (
          <ListItem
            disableGutters
            key={currency.name}
            sx={{
              pb: 2,
              pt: 0
            }}
          >
            <ListItemText
              disableTypography
              primary={(
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between'
                  }}
                >
                  <Badge
                    anchorOrigin={{
                      vertical: 'top',
                      horizontal: 'left'
                    }}
                    variant="dot"
                    sx={{
                      pl: '20px',
                      '& .MuiBadge-badge': {
                        backgroundColor: currency.color,
                        left: 6,
                        top: 11
                      }
                    }}
                  >
                    <Typography
                      color="textPrimary"
                      variant="subtitle2"
                    >
                      {currency.name}
                    </Typography>
                  </Badge>
                  <Typography
                    color="textSecondary"
                    variant="subtitle2"
                  >
                    {numeral(currency.amount)
                      .format('$0,0.00')}
                  </Typography>
                </Box>
              )}
            />
          </ListItem>
        ))}
      </List>
      <Divider />
      <Box
        sx={{
          alignItems: 'flex-start',
          display: 'flex',
          flexDirection: 'column',
          pt: 2
        }}
      >
        <Button
          color="primary"
          endIcon={<ArrowRightIcon fontSize="small" />}
          variant="text"
        >
          Add money
        </Button>
        <Button
          color="primary"
          endIcon={<ArrowRightIcon fontSize="small" />}
          variant="text"
        >
          Withdraw funds
        </Button>
      </Box>
    </CardContent>
  </Card>
);

export default OverviewTotalBalance;
