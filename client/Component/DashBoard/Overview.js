import React from 'react';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Container,
  Grid,
  Typography
} from '@material-ui/core';
import OverviewWeeklyEarnings from './overview/OverviewWeeklyEarnings';
import OverviewTotalTransactions from './overview/OverviewTotalTransactions';
import OverviewTotalBalance from './overview/OverviewTotalBalance';
import OverviewPrivateWallet from './overview/OverviewPrivateWallet';
import OverviewLatestTransactions from './overview/OverviewLatestTransactions';
import OverviewInbox from './overview/OverviewInbox';
import useSettings from '../../hooks/useSettings';
import ArrowRightIcon from '../../icons/ArrowRight'
import BriefcaseIcon from '../../icons/Briefcase';
import DownloadIcon from '../../icons/Download';
import ExternalLinkIcon from '../../icons/ExternalLink';
import InformationCircleIcon from '../../icons/InformationCircle';
import PlusIcon from '../../icons/Plus';
import UsersIcon from '../../icons/Users';
import gtm from '../../lib/gtm'

const Overview = () => {
  const { settings } = useSettings();

  useEffect(() => {
    gtm.push({ event: 'page_view' });
  }, []);

  return (
    <>
      {/* <Helmet>
        <title>Dashboard: Overview | Material Kit Pro</title>
      </Helmet> */}
      <Box
        sx={{
          backgroundColor: 'background.default',
          minHeight: '100%',
          py: 8
        }}
      >
        <Container maxWidth={settings.compact ? 'xl' : false}>
          <Grid
            container
            spacing={3}
          >
            <Grid
              alignItems="center"
              container
              justifyContent="space-between"
              spacing={3}
              item
              xs={12}
            >
               <Grid item>
                <Typography
                  variant="overline"
                >
                  Overview
                </Typography>
                <Typography
                  variant="h5"
                  color="secondary"
                >
                  Good Morning, Jane
                </Typography>
                <Typography
                  variant="subtitle2"
                >
                  Here&apos;s what&apos;s happening with your projects
                  today
                </Typography>
              </Grid>
              
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Overview;
