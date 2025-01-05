import React from 'react';
import DocLayout from '../../components/DocLayout.tsx';
import './Docs.css';

function SplitTypes() {
  return (
    <DocLayout>
      <div className='spacer'/>
      <h1>Split Types</h1>
      <p>An in-depth guide explaining the two different split types: Contribution and Balanace Split.</p>
      <hr className='doc-divider' />
      <h2>Contribution Split</h2>
      <h3>By Percentage &#x0028;&#x0025;&#x0029;</h3>
      <p>This indicates the percent amount that each person contributed towards the Total Amount.</p>
      <p><i>For example, if the Total Amount is $500 and Bob contributes 20% while Bill contributes 80%, then that means Bob contributed $100 while Bill contributed $400.</i></p>
      <h3>By Dollar Amount &#x0028;$&#x0029;</h3>
      <p>This indicates the dollar amount that each person contributed towards the Total Amount.</p>
      <hr className='doc-divider' />
      <h2>Balance Split</h2>
      <p>Balance Split indicates the actual amount a person is deducted/owed in a bill.</p>
      <p>This amount will be determined based on members of Who Paid &#x0028;if applicable&#x0029;.</p>
      <p>
        <i>For example, Bob and Bill went to the store to buy a $500 crate. Bob paid $200 and Bill paid $300.</i>
        <br />
        <i>The Contribution Split between Bob, Bill, Joe, and John is $125 per person.</i>
        <br />
        <i>The Balance Split will be +$75 for Bob and $125 for Bill, and -$125 for Joe and John. This is because Bob and Bill overpaid the amount they were supposed contribute due to paying for the bill initially, and should therefore be reimbursed.</i>
      </p>
      
      <div className='spacer'/>
    </DocLayout>
  );
}

export default SplitTypes;