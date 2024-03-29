import cc from 'classnames';
import Image from 'components/image-block/Image';
import styles from './DetectionCard.module.css';


type DetectionCardProps = {
  className?: string,
  personPhoto?: string,
  cadr?: string,
  name: string,
  desc?: string,
}

function DetectionCard(props: DetectionCardProps) {
  const {className, personPhoto, cadr, name, desc} = props;
  if (!cadr) {
    return (
      <section className={cc(className, styles.root)} />
    );
  }
  return (
    <section className={cc(className, styles.root)}>
      <div className={styles.imagesBox}>
        <div className={styles.imageContainer}>
          <Image className={styles.image} src={cadr} />
        </div>
        <div className={styles.imageContainer}>
          <Image className={styles.image} src={personPhoto} />
        </div>
      </div>
      {name && (
        <div className={styles.nameBox}>
          <p className={styles.name}>{name}</p>
          <p className={styles.desc}>{desc}</p>
        </div>
      )}
    </section>
  );
}

export default DetectionCard;