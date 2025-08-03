import '../styles/Alert.scss';
import { motion, AnimatePresence } from 'framer-motion';

const Alert = ({ alert, message }) => {
	return (
		<AnimatePresence>
			{alert && (
				<motion.div
					className="Alert-container"
					initial={{ x: '100%', opacity: 0 }}
					animate={{ x: 0, opacity: 1 }}
					exit={{ x: '100%', opacity: 0 }}
					transition={{ duration: 0.2, ease: 'easeInOut' }}
				>
					<div className="Alert-wrapper">
						<div>{message}</div>
					</div>
				</motion.div>
			)}
		</AnimatePresence>
	);
};

export default Alert;
