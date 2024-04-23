import Button from '../button/Button';
import PropTypes from "prop-types";
import './pageHeader.css'

const PageHeader = ({mainLabel, btnLabel}) => {
  return (
    <div className="page-header-wrap">
        <h1 className="page-header-label">{mainLabel}</h1>
        <Button label={btnLabel}  link="javascript:;"></Button>
    </div>
  );
};

PageHeader.propTypes = {
    mainLabel: PropTypes.node.isRequired,
    btnLabel: PropTypes.node.isRequired,
  };


export default PageHeader;