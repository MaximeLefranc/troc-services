import { useEffect } from 'react';
import './styles.scss';

function LegalNotice(): JSX.Element {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="legalnotice">
      <h1 className="legalnotice__title--first">MENTIONS LEGALES :</h1>
      <p className="legalnotice__description">
        Conformément aux dispositions des articles 6-III et 19 de la Loi n°
        2004-575 du 21 juin 2004 pour la Confiance dans l'économie numérique,
        dite L.C.E.N., nous portons à la connaissance des utilisateurs et
        visiteurs du site : troc-services.com les informations suivantes :
      </p>
      <h2 className="legalnotice__title--secondary">ÉDITEUR</h2>
      <p className="legalnotice__description">
        Le site troc-services.com est la propriété exclusive de SAS Troc
        Services, qui l'édite.
      </p>
      <h3 className="legalnotice__title">Troc Services </h3>
      <p className="legalnotice__description">
        SAS au capital de 10 €Tél : 0767049216
      </p>
      <h3 className="legalnotice__title">
        15 Rue de Michelfelden 68300 Saint-Louis{' '}
      </h3>
      <p className="legalnotice__description">
        Immatriculée au Registre du Commerce et des Sociétés de test sous le
        numéro 123 568 941 00056
      </p>
      <p className="legalnotice__description">
        Numéro TVA intracommunautaire : 123 <br /> Adresse de courrier
        électronique : lamrinouha97@gmail.com
      </p>
      <p className="legalnotice__description">
        Directeur de la publication : Troc Services <br /> Contactez le
        responsable de la publication : lamrinouha97@gmail.com
      </p>
      <h2 className="legalnotice__title--secondary">HÉBERGEMENT</h2>
      <p className="legalnotice__description">
        Le site est hébergé par ovh ovh 67500 Haguenau <br />
        CREDITS : les mentions légales ont étés générées par mentions légales
        <br />
        Horaires de la Patinoire Lyon
      </p>
      <h2 className="legalnotice__title--secondary">
        DESCRIPTION DES SERVICES FOURNIS
      </h2>
      <p className="legalnotice__description">
        Le site troc-services.com a pour objet de fournir une information
        concernant l’ensemble des activités de la société. Le proprietaire du
        site s’efforce de fournir sur le site troc-services.com des informations
        aussi précises que possible. Toutefois, il ne pourra être tenue
        responsable des omissions, des inexactitudes et des carences dans la
        mise à jour, qu’elles soient de son fait ou du fait des tiers
        partenaires qui lui fournissent ces informations. Tous les informations
        proposées sur le site troc-services.com sont données à titre indicatif,
        sont non exhaustives, et sont susceptibles d’évoluer. Elles sont données
        sous réserve de modifications ayant été apportées depuis leur mise en
        ligne.
      </p>
      <h2 className="legalnotice__title--secondary">
        PROPRIÉTÉ INTELLECTUELLE ET CONTREFAÇONS
      </h2>
      <p className="legalnotice__description">
        Le proprietaire du site est propriétaire des droits de propriété
        intellectuelle ou détient les droits d’usage sur tous les éléments
        accessibles sur le site, notamment les textes, images, graphismes, logo,
        icônes, sons, logiciels… Toute reproduction, représentation,
        modification, publication, adaptation totale ou partielle des éléments
        du site, quel que soit le moyen ou le procédé utilisé, est interdite,
        sauf autorisation écrite préalable à l'email : lamrinouha97@gmail.com .
        Toute exploitation non autorisée du site ou de l’un quelconque de ces
        éléments qu’il contient sera considérée comme constitutive d’une
        contrefaçon et poursuivie conformément aux dispositions des articles
        L.335-2 et suivants du Code de Propriété Intellectuelle.
      </p>
      <h2 className="legalnotice__title--secondary">
        LIENS HYPERTEXTES ET COOKIES
      </h2>
      <p className="legalnotice__description">
        Le site troc-services.com contient un certain nombre de liens
        hypertextes vers d’autres sites (partenaires, informations …) mis en
        place avec l’autorisation de le proprietaire du site . Cependant, le
        proprietaire du site n’a pas la possibilité de vérifier le contenu des
        sites ainsi visités et décline donc toute responsabilité de ce fait
        quand aux risques éventuels de contenus illicites. L’utilisateur est
        informé que lors de ses visites sur le site troc-services.com, un ou des
        cookies sont susceptible de s’installer automatiquement sur son
        ordinateur. Un cookie est un fichier de petite taille, qui ne permet pas
        l’identification de l’utilisateur, mais qui enregistre des informations
        relatives à la navigation d’un ordinateur sur un site. Les données ainsi
        obtenues visent à faciliter la navigation ultérieure sur le site, et ont
        également vocation à permettre diverses mesures de fréquentation. Le
        paramétrage du logiciel de navigation permet d’informer de la présence
        de cookie et éventuellement, de refuser de la manière décrite à
        l’adresse suivante : www.cnil.fr Le refus d’installation d’un cookie
        peut entraîner l’impossibilité d’accéder à certains services.
        L’utilisateur peut toutefois configurer son ordinateur de la manière
        suivante, pour refuser l’installation des cookies : Sous Internet
        Explorer : onglet outil / options internet. Cliquez sur Confidentialité
        et choisissez Bloquer tous les cookies. Validez sur Ok. Sous Netscape :
        onglet édition / préférences. Cliquez sur Avancées et choisissez
        Désactiver les cookies. Validez sur Ok.
      </p>
      <h2 className="legalnotice__title--secondary">
        PROTECTION DES BIENS ET DES PERSONNES - GESTION DES DONNÉES PERSONNELLES
      </h2>
      <p className="legalnotice__description">
        Utilisateur : Internaute se connectant, utilisant le site susnommé :
        troc-services.com En France, les données personnelles sont notamment
        protégées par la loi n° 78-87 du 6 janvier 1978, la loi n° 2004-801 du 6
        août 2004, l'article L. 226-13 du Code pénal et la Directive Européenne
        du 24 octobre 1995.
      </p>
      <p className="legalnotice__description">
        Sur le site troc-services.com, le proprietaire du site ne collecte des
        informations personnelles relatives à l'utilisateur que pour le besoin
        de certains services proposés par le site troc-services.com.
        L'utilisateur fournit ces informations en toute connaissance de cause,
        notamment lorsqu'il procède par lui-même à leur saisie. Il est alors
        précisé à l'utilisateur du site troc-services.com l’obligation ou non de
        fournir ces informations. Conformément aux dispositions des articles 38
        et suivants de la loi 78-17 du 6 janvier 1978 relative à l’informatique,
        aux fichiers et aux libertés, tout utilisateur dispose d’un droit
        d’accès, de rectification, de suppression et d’opposition aux données
        personnelles le concernant. Pour l’exercer, adressez votre demande à
        troc-services.com par email : email du webmaster ou en effectuant sa
        demande écrite et signée, accompagnée d’une copie du titre d’identité
        avec signature du titulaire de la pièce, en précisant l’adresse à
        laquelle la réponse doit être envoyée.
      </p>
      <p className="legalnotice__description">
        Aucune information personnelle de l'utilisateur du site
        troc-services.com n'est publiée à l'insu de l'utilisateur, échangée,
        transférée, cédée ou vendue sur un support quelconque à des tiers. Seule
        l'hypothèse du rachat du site troc-services.com à le proprietaire du
        site et de ses droits permettrait la transmission des dites informations
        à l'éventuel acquéreur qui serait à son tour tenu de la même obligation
        de conservation et de modification des données vis à vis de
        l'utilisateur du site troc-services.com.
      </p>
      <p className="legalnotice__description">
        Le site troc-services.com est en conformité avec le RGPD voir notre
        politique RGPD troc-services.com/mention-légales.
      </p>
      <p className="legalnotice__description">
        Les bases de données sont protégées par les dispositions de la loi du
        1er juillet 1998 transposant la directive 96/9 du 11 mars 1996 relative
        à la protection juridique des bases de données.
      </p>
    </section>
  );
}

export default LegalNotice;
