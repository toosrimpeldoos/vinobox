import Head from 'next/head'

import Navbar from '../../components/Navbar'
import Peronalia from '../../components/Peronalia'
import JouwVinoprint from '../../components/JouwVinoprint'

import React, { useState, useEffect } from 'react'
import axios from 'axios'

function VinoprintProfile({ profile }) {
  return (
    <div>
      <Head>
        <title>The next Vinoprint </title>
      </Head>
      <div className="min-h-screen basis-full bg-gebrokenwit ">
        <Navbar fullname={profile.fullname} />
        <Peronalia fullname={profile.fullname} />
        <JouwVinoprint
          red_cluster_scores={profile.red_cluster_scores}
          white_cluster_scores={profile.white_cluster_scores}
          grape_favourites={profile.grape_favourites}
        />
      </div>
    </div>
  )
}

export async function getServerSideProps(context) {
  const pid = context.params.pid
  const res = await axios.get(
    'https://tastech-vp.ew.r.appspot.com/api/v0/get_vp',
    {
      params: {
        vp_id: pid,
      },
      headers: {
        Authorization: 'Bearer ' + process.env.VINO_BEARER,
      },
    }
  )
  const profile = res.data
  return {
    props: { profile }, // will be passed to the page component as props
  }
}

export default VinoprintProfile
