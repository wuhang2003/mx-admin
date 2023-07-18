import{i as J,c as ee,f as te,s as re,t as i,L as ae,a as ne,E as ie,b as se,d as oe,e as le,g as ce}from"./codemirror-9871e0ea.js";import"./use-save-confirm-e9a15810.js";import"./index-0c9d0a31.js";import"./toggle-990243fa.js";import"./use-react-acf1856b.js";import"./throttle-c3d6450f.js";import"./FormItem-e83c3e27.js";import"./Form-b9357864.js";import"./InputNumber-ecfe6fde.js";import"./Remove-083848a6.js";import"./Add-981e4c18.js";import"./Switch-6b2c7cd7.js";import"./Select-bad467d1.js";import"./Tag-61b52a1b.js";const de=36,B=1,me=2,w=3,C=4,ue=5,fe=6,pe=7,ge=8,he=9,_e=10,be=11,ve=12,ye=13,ke=14,Oe=15,xe=16,we=17,L=18,Qe=19,V=20,$=21,X=22,Se=23,Ce=24;function P(t){return t>=65&&t<=90||t>=97&&t<=122||t>=48&&t<=57}function Pe(t){return t>=48&&t<=57||t>=97&&t<=102||t>=65&&t<=70}function g(t,e,a){for(let r=!1;;){if(t.next<0)return;if(t.next==e&&!r){t.advance();return}r=a&&!r&&t.next==92,t.advance()}}function qe(t){for(;;){if(t.next<0||t.peek(1)<0)return;if(t.next==36&&t.peek(1)==36){t.advance(2);return}t.advance()}}function E(t,e){for(;!(t.next!=95&&!P(t.next));)e!=null&&(e+=String.fromCharCode(t.next)),t.advance();return e}function Te(t){if(t.next==39||t.next==34||t.next==96){let e=t.next;t.advance(),g(t,e,!1)}else E(t)}function R(t,e){for(;t.next==48||t.next==49;)t.advance();e&&t.next==e&&t.advance()}function j(t,e){for(;;){if(t.next==46){if(e)break;e=!0}else if(t.next<48||t.next>57)break;t.advance()}if(t.next==69||t.next==101)for(t.advance(),(t.next==43||t.next==45)&&t.advance();t.next>=48&&t.next<=57;)t.advance()}function D(t){for(;!(t.next<0||t.next==10);)t.advance()}function v(t,e){for(let a=0;a<e.length;a++)if(e.charCodeAt(a)==t)return!0;return!1}const I=` 	\r
`;function N(t,e,a){let r=Object.create(null);r.true=r.false=ue,r.null=r.unknown=fe;for(let n of t.split(" "))n&&(r[n]=V);for(let n of e.split(" "))n&&(r[n]=$);for(let n of(a||"").split(" "))n&&(r[n]=Ce);return r}const h="array binary bit boolean char character clob date decimal double float int integer interval large national nchar nclob numeric object precision real smallint time timestamp varchar varying ",_="absolute action add after all allocate alter and any are as asc assertion at authorization before begin between both breadth by call cascade cascaded case cast catalog check close collate collation column commit condition connect connection constraint constraints constructor continue corresponding count create cross cube current current_date current_default_transform_group current_transform_group_for_type current_path current_role current_time current_timestamp current_user cursor cycle data day deallocate declare default deferrable deferred delete depth deref desc describe descriptor deterministic diagnostics disconnect distinct do domain drop dynamic each else elseif end end-exec equals escape except exception exec execute exists exit external fetch first for foreign found from free full function general get global go goto grant group grouping handle having hold hour identity if immediate in indicator initially inner inout input insert intersect into is isolation join key language last lateral leading leave left level like limit local localtime localtimestamp locator loop map match method minute modifies module month names natural nesting new next no none not of old on only open option or order ordinality out outer output overlaps pad parameter partial path prepare preserve primary prior privileges procedure public read reads recursive redo ref references referencing relative release repeat resignal restrict result return returns revoke right role rollback rollup routine row rows savepoint schema scroll search second section select session session_user set sets signal similar size some space specific specifictype sql sqlexception sqlstate sqlwarning start state static system_user table temporary then timezone_hour timezone_minute to trailing transaction translation treat trigger under undo union unique unnest until update usage user using value values view when whenever where while with without work write year zone ",q={backslashEscapes:!1,hashComments:!1,spaceAfterDashes:!1,slashComments:!1,doubleQuotedStrings:!1,doubleDollarQuotedStrings:!1,unquotedBitLiterals:!1,treatBitsAsBytes:!1,charSetCasts:!1,operatorChars:"*+-%<>!=&|~^/",specialVar:"?",identifierQuotes:'"',words:N(_,h)};function Ue(t,e,a,r){let n={};for(let s in q)n[s]=(t.hasOwnProperty(s)?t:q)[s];return e&&(n.words=N(e,a||"",r)),n}function W(t){return new ie(e=>{var a;let{next:r}=e;if(e.advance(),v(r,I)){for(;v(e.next,I);)e.advance();e.acceptToken(de)}else if(r==36&&e.next==36&&t.doubleDollarQuotedStrings)qe(e),e.acceptToken(w);else if(r==39||r==34&&t.doubleQuotedStrings)g(e,r,t.backslashEscapes),e.acceptToken(w);else if(r==35&&t.hashComments||r==47&&e.next==47&&t.slashComments)D(e),e.acceptToken(B);else if(r==45&&e.next==45&&(!t.spaceAfterDashes||e.peek(1)==32))D(e),e.acceptToken(B);else if(r==47&&e.next==42){e.advance();for(let n=1;;){let s=e.next;if(e.next<0)break;if(e.advance(),s==42&&e.next==47){if(n--,e.advance(),!n)break}else s==47&&e.next==42&&(n++,e.advance())}e.acceptToken(me)}else if((r==101||r==69)&&e.next==39)e.advance(),g(e,39,!0);else if((r==110||r==78)&&e.next==39&&t.charSetCasts)e.advance(),g(e,39,t.backslashEscapes),e.acceptToken(w);else if(r==95&&t.charSetCasts)for(let n=0;;n++){if(e.next==39&&n>1){e.advance(),g(e,39,t.backslashEscapes),e.acceptToken(w);break}if(!P(e.next))break;e.advance()}else if(r==40)e.acceptToken(pe);else if(r==41)e.acceptToken(ge);else if(r==123)e.acceptToken(he);else if(r==125)e.acceptToken(_e);else if(r==91)e.acceptToken(be);else if(r==93)e.acceptToken(ve);else if(r==59)e.acceptToken(ye);else if(t.unquotedBitLiterals&&r==48&&e.next==98)e.advance(),R(e),e.acceptToken(X);else if((r==98||r==66)&&(e.next==39||e.next==34)){const n=e.next;e.advance(),t.treatBitsAsBytes?(g(e,n,t.backslashEscapes),e.acceptToken(Se)):(R(e,n),e.acceptToken(X))}else if(r==48&&(e.next==120||e.next==88)||(r==120||r==88)&&e.next==39){let n=e.next==39;for(e.advance();Pe(e.next);)e.advance();n&&e.next==39&&e.advance(),e.acceptToken(C)}else if(r==46&&e.next>=48&&e.next<=57)j(e,!0),e.acceptToken(C);else if(r==46)e.acceptToken(ke);else if(r>=48&&r<=57)j(e,!1),e.acceptToken(C);else if(v(r,t.operatorChars)){for(;v(e.next,t.operatorChars);)e.advance();e.acceptToken(Oe)}else if(v(r,t.specialVar))e.next==r&&e.advance(),Te(e),e.acceptToken(we);else if(v(r,t.identifierQuotes))g(e,r,!1),e.acceptToken(Qe);else if(r==58||r==44)e.acceptToken(xe);else if(P(r)){let n=E(e,String.fromCharCode(r));e.acceptToken(e.next==46?L:(a=t.words[n.toLowerCase()])!==null&&a!==void 0?a:L)}})}const A=W(q),ze=se.deserialize({version:14,states:"%vQ]QQOOO#wQRO'#DSO$OQQO'#CwO%eQQO'#CxO%lQQO'#CyO%sQQO'#CzOOQQ'#DS'#DSOOQQ'#C}'#C}O'UQRO'#C{OOQQ'#Cv'#CvOOQQ'#C|'#C|Q]QQOOQOQQOOO'`QQO'#DOO(xQRO,59cO)PQQO,59cO)UQQO'#DSOOQQ,59d,59dO)cQQO,59dOOQQ,59e,59eO)jQQO,59eOOQQ,59f,59fO)qQQO,59fOOQQ-E6{-E6{OOQQ,59b,59bOOQQ-E6z-E6zOOQQ,59j,59jOOQQ-E6|-E6|O+VQRO1G.}O+^QQO,59cOOQQ1G/O1G/OOOQQ1G/P1G/POOQQ1G/Q1G/QP+kQQO'#C}O+rQQO1G.}O)PQQO,59cO,PQQO'#Cw",stateData:",[~OtOSPOSQOS~ORUOSUOTUOUUOVROXSOZTO]XO^QO_UO`UOaPObPOcPOdUOeUOfUOgUOhUO~O^]ORvXSvXTvXUvXVvXXvXZvX]vX_vX`vXavXbvXcvXdvXevXfvXgvXhvX~OsvX~P!jOa_Ob_Oc_O~ORUOSUOTUOUUOVROXSOZTO^tO_UO`UOa`Ob`Oc`OdUOeUOfUOgUOhUO~OWaO~P$ZOYcO~P$ZO[eO~P$ZORUOSUOTUOUUOVROXSOZTO^QO_UO`UOaPObPOcPOdUOeUOfUOgUOhUO~O]hOsoX~P%zOajObjOcjO~O^]ORkaSkaTkaUkaVkaXkaZka]ka_ka`kaakabkackadkaekafkagkahka~Oska~P'kO^]O~OWvXYvX[vX~P!jOWnO~P$ZOYoO~P$ZO[pO~P$ZO^]ORkiSkiTkiUkiVkiXkiZki]ki_ki`kiakibkickidkiekifkigkihki~Oski~P)xOWkaYka[ka~P'kO]hO~P$ZOWkiYki[ki~P)xOasObsOcsO~O",goto:"#hwPPPPPPPPPPPPPPPPPPPPPPPPPPx||||!Y!^!d!xPPP#[TYOZeUORSTWZbdfqT[OZQZORiZSWOZQbRQdSQfTZgWbdfqQ^PWk^lmrQl_Qm`RrseVORSTWZbdfq",nodeNames:"⚠ LineComment BlockComment String Number Bool Null ( ) { } [ ] ; . Operator Punctuation SpecialVar Identifier QuotedIdentifier Keyword Type Bits Bytes Builtin Script Statement CompositeIdentifier Parens Braces Brackets Statement",maxTerm:38,skippedNodes:[0,1,2],repeatNodeCount:3,tokenData:"RORO",tokenizers:[0,A],topRules:{Script:[0,25]},tokenPrec:0});function T(t){let e=t.cursor().moveTo(t.from,-1);for(;/Comment/.test(e.name);)e.moveTo(e.from,-1);return e.node}function k(t,e){let a=t.sliceString(e.from,e.to),r=/^([`'"])(.*)\1$/.exec(a);return r?r[2]:a}function Q(t){return t&&(t.name=="Identifier"||t.name=="QuotedIdentifier")}function Be(t,e){if(e.name=="CompositeIdentifier"){let a=[];for(let r=e.firstChild;r;r=r.nextSibling)Q(r)&&a.push(k(t,r));return a}return[k(t,e)]}function Z(t,e){for(let a=[];;){if(!e||e.name!=".")return a;let r=T(e);if(!Q(r))return a;a.unshift(k(t,r)),e=T(r)}}function Le(t,e){let a=ce(t).resolveInner(e,-1),r=Re(t.doc,a);return a.name=="Identifier"||a.name=="QuotedIdentifier"||a.name=="Keyword"?{from:a.from,quoted:a.name=="QuotedIdentifier"?t.doc.sliceString(a.from,a.from+1):null,parents:Z(t.doc,T(a)),aliases:r}:a.name=="."?{from:e,quoted:null,parents:Z(t.doc,a),aliases:r}:{from:e,quoted:null,parents:[],empty:!0,aliases:r}}const Xe=new Set("where group having order union intersect except all distinct limit offset fetch for".split(" "));function Re(t,e){let a;for(let n=e;!a;n=n.parent){if(!n)return null;n.name=="Statement"&&(a=n)}let r=null;for(let n=a.firstChild,s=!1,f=null;n;n=n.nextSibling){let o=n.name=="Keyword"?t.sliceString(n.from,n.to).toLowerCase():null,l=null;if(!s)s=o=="from";else if(o=="as"&&f&&Q(n.nextSibling))l=k(t,n.nextSibling);else{if(o&&Xe.has(o))break;f&&Q(n)&&(l=k(t,n))}l&&(r||(r=Object.create(null)),r[l]=Be(t,f)),f=/Identifier$/.test(n.name)?n:null}return r}function je(t,e){return t?e.map(a=>Object.assign(Object.assign({},a),{label:t+a.label+t,apply:void 0})):e}const De=/^\w*$/,Ie=/^[`'"]?\w*[`'"]?$/;class U{constructor(){this.list=[],this.children=void 0}child(e,a){let r=this.children||(this.children=Object.create(null)),n=r[e];return n||(e&&this.list.push(K(e,"type",a)),r[e]=new U)}addCompletions(e){for(let a of e){let r=this.list.findIndex(n=>n.label==a.label);r>-1?this.list[r]=a:this.list.push(a)}}}function K(t,e,a){return/[^\w\xb5-\uffff]/.test(t)?{label:t,type:e,apply:a+t+a}:{label:t,type:e}}function Ze(t,e,a,r,n,s){var f;let o=new U,l=((f=s?.spec.identifierQuotes)===null||f===void 0?void 0:f[0])||'"',b=o.child(n||"",l);for(let m in t){let p=m.split("."),y=p.length==1?b:o;for(let c of p)y=y.child(c,l);for(let c of t[m])c&&y.list.push(typeof c=="string"?K(c,"property",l):c)}return e&&b.addCompletions(e),a&&o.addCompletions(a),o.addCompletions(b.list),r&&o.addCompletions(b.child(r,l).list),m=>{let{parents:p,from:y,quoted:c,empty:M,aliases:O}=Le(m.state,m.pos);if(M&&!m.explicit)return null;O&&p.length==1&&(p=O[p[0]]||p);let d=o;for(let x of p){for(;!d.children||!d.children[x];)if(d==o)d=b;else if(d==b&&r)d=d.child(r,l);else return null;d=d.child(x,l)}let H=c&&m.state.sliceDoc(m.pos,m.pos+1)==c,S=d.list;return d==o&&O&&(S=S.concat(Object.keys(O).map(x=>({label:x,type:"constant"})))),{from:y,to:H?m.pos+1:void 0,options:je(c,S),validFor:c?Ie:De}}}function Ve(t,e){let a=Object.keys(t).map(r=>({label:e?r.toUpperCase():r,type:t[r]==$?"type":t[r]==V?"keyword":"variable",boost:-1}));return oe(["QuotedIdentifier","SpecialVar","String","LineComment","BlockComment","."],le(a))}let $e=ze.configure({props:[J.add({Statement:ee()}),te.add({Statement(t){return{from:t.firstChild.to,to:t.to}},BlockComment(t){return{from:t.from+2,to:t.to-2}}}),re({Keyword:i.keyword,Type:i.typeName,Builtin:i.standard(i.name),Bits:i.number,Bytes:i.string,Bool:i.bool,Null:i.null,Number:i.number,String:i.string,Identifier:i.name,QuotedIdentifier:i.special(i.string),SpecialVar:i.special(i.name),LineComment:i.lineComment,BlockComment:i.blockComment,Operator:i.operator,"Semi Punctuation":i.punctuation,"( )":i.paren,"{ }":i.brace,"[ ]":i.squareBracket})]});class u{constructor(e,a,r){this.dialect=e,this.language=a,this.spec=r}get extension(){return this.language.extension}static define(e){let a=Ue(e,e.keywords,e.types,e.builtin),r=ae.define({name:"sql",parser:$e.configure({tokenizers:[{from:A,to:W(a)}]}),languageData:{commentTokens:{line:"--",block:{open:"/*",close:"*/"}},closeBrackets:{brackets:["(","[","{","'",'"',"`"]}}});return new u(a,r,e)}}function Ee(t,e=!1){return Ve(t.dialect.words,e)}function Ne(t,e=!1){return t.language.data.of({autocomplete:Ee(t,e)})}function We(t){return t.schema?Ze(t.schema,t.tables,t.schemas,t.defaultTable,t.defaultSchema,t.dialect||z):()=>null}function Ae(t){return t.schema?(t.dialect||z).language.data.of({autocomplete:We(t)}):[]}function ot(t={}){let e=t.dialect||z;return new ne(e.language,[Ae(t),Ne(e,!!t.upperCaseKeywords)])}const z=u.define({}),lt=u.define({charSetCasts:!0,doubleDollarQuotedStrings:!0,operatorChars:"+-*/<>=~!@#%^&|`?",specialVar:"",keywords:_+"a abort abs absent access according ada admin aggregate alias also always analyse analyze array_agg array_max_cardinality asensitive assert assignment asymmetric atomic attach attribute attributes avg backward base64 begin_frame begin_partition bernoulli bit_length blocked bom c cache called cardinality catalog_name ceil ceiling chain char_length character_length character_set_catalog character_set_name character_set_schema characteristics characters checkpoint class class_origin cluster coalesce cobol collation_catalog collation_name collation_schema collect column_name columns command_function command_function_code comment comments committed concurrently condition_number configuration conflict connection_name constant constraint_catalog constraint_name constraint_schema contains content control conversion convert copy corr cost covar_pop covar_samp csv cume_dist current_catalog current_row current_schema cursor_name database datalink datatype datetime_interval_code datetime_interval_precision db debug defaults defined definer degree delimiter delimiters dense_rank depends derived detach detail dictionary disable discard dispatch dlnewcopy dlpreviouscopy dlurlcomplete dlurlcompleteonly dlurlcompletewrite dlurlpath dlurlpathonly dlurlpathwrite dlurlscheme dlurlserver dlvalue document dump dynamic_function dynamic_function_code element elsif empty enable encoding encrypted end_frame end_partition endexec enforced enum errcode error event every exclude excluding exclusive exp explain expression extension extract family file filter final first_value flag floor following force foreach fortran forward frame_row freeze fs functions fusion g generated granted greatest groups handler header hex hierarchy hint id ignore ilike immediately immutable implementation implicit import include including increment indent index indexes info inherit inherits inline insensitive instance instantiable instead integrity intersection invoker isnull k key_member key_type label lag last_value lead leakproof least length library like_regex link listen ln load location lock locked log logged lower m mapping matched materialized max max_cardinality maxvalue member merge message message_length message_octet_length message_text min minvalue mod mode more move multiset mumps name namespace nfc nfd nfkc nfkd nil normalize normalized nothing notice notify notnull nowait nth_value ntile nullable nullif nulls number occurrences_regex octet_length octets off offset oids operator options ordering others over overlay overriding owned owner p parallel parameter_mode parameter_name parameter_ordinal_position parameter_specific_catalog parameter_specific_name parameter_specific_schema parser partition pascal passing passthrough password percent percent_rank percentile_cont percentile_disc perform period permission pg_context pg_datatype_name pg_exception_context pg_exception_detail pg_exception_hint placing plans pli policy portion position position_regex power precedes preceding prepared print_strict_params procedural procedures program publication query quote raise range rank reassign recheck recovery refresh regr_avgx regr_avgy regr_count regr_intercept regr_r2 regr_slope regr_sxx regr_sxy regr_syy reindex rename repeatable replace replica requiring reset respect restart restore result_oid returned_cardinality returned_length returned_octet_length returned_sqlstate returning reverse routine_catalog routine_name routine_schema routines row_count row_number rowtype rule scale schema_name schemas scope scope_catalog scope_name scope_schema security selective self sensitive sequence sequences serializable server server_name setof share show simple skip slice snapshot source specific_name sqlcode sqlerror sqrt stable stacked standalone statement statistics stddev_pop stddev_samp stdin stdout storage strict strip structure style subclass_origin submultiset subscription substring substring_regex succeeds sum symmetric sysid system system_time t table_name tables tablesample tablespace temp template ties token top_level_count transaction_active transactions_committed transactions_rolled_back transform transforms translate translate_regex trigger_catalog trigger_name trigger_schema trim trim_array truncate trusted type types uescape unbounded uncommitted unencrypted unlink unlisten unlogged unnamed untyped upper uri use_column use_variable user_defined_type_catalog user_defined_type_code user_defined_type_name user_defined_type_schema vacuum valid validate validator value_of var_pop var_samp varbinary variable_conflict variadic verbose version versioning views volatile warning whitespace width_bucket window within wrapper xmlagg xmlattributes xmlbinary xmlcast xmlcomment xmlconcat xmldeclaration xmldocument xmlelement xmlexists xmlforest xmliterate xmlnamespaces xmlparse xmlpi xmlquery xmlroot xmlschema xmlserialize xmltable xmltext xmlvalidate yes",types:h+"bigint int8 bigserial serial8 varbit bool box bytea cidr circle precision float8 inet int4 json jsonb line lseg macaddr macaddr8 money numeric pg_lsn point polygon float4 int2 smallserial serial2 serial serial4 text timetz timestamptz tsquery tsvector txid_snapshot uuid xml"}),F="accessible algorithm analyze asensitive authors auto_increment autocommit avg avg_row_length binlog btree cache catalog_name chain change changed checkpoint checksum class_origin client_statistics coalesce code collations columns comment committed completion concurrent consistent contains contributors convert database databases day_hour day_microsecond day_minute day_second delay_key_write delayed delimiter des_key_file dev_pop dev_samp deviance directory disable discard distinctrow div dual dumpfile enable enclosed ends engine engines enum errors escaped even event events every explain extended fast field fields flush force found_rows fulltext grants handler hash high_priority hosts hour_microsecond hour_minute hour_second ignore ignore_server_ids import index index_statistics infile innodb insensitive insert_method install invoker iterate keys kill linear lines list load lock logs low_priority master master_heartbeat_period master_ssl_verify_server_cert masters max max_rows maxvalue message_text middleint migrate min min_rows minute_microsecond minute_second mod mode modify mutex mysql_errno no_write_to_binlog offline offset one online optimize optionally outfile pack_keys parser partition partitions password phase plugin plugins prev processlist profile profiles purge query quick range read_write rebuild recover regexp relaylog remove rename reorganize repair repeatable replace require resume rlike row_format rtree schedule schema_name schemas second_microsecond security sensitive separator serializable server share show slave slow snapshot soname spatial sql_big_result sql_buffer_result sql_cache sql_calc_found_rows sql_no_cache sql_small_result ssl starting starts std stddev stddev_pop stddev_samp storage straight_join subclass_origin sum suspend table_name table_statistics tables tablespace terminated triggers truncate uncommitted uninstall unlock upgrade use use_frm user_resources user_statistics utc_date utc_time utc_timestamp variables views warnings xa xor year_month zerofill",G=h+"bool blob long longblob longtext medium mediumblob mediumint mediumtext tinyblob tinyint tinytext text bigint int1 int2 int3 int4 int8 float4 float8 varbinary varcharacter precision datetime unsigned signed",Y="charset clear edit ego help nopager notee nowarning pager print prompt quit rehash source status system tee",ct=u.define({operatorChars:"*+-%<>!=&|^",charSetCasts:!0,doubleQuotedStrings:!0,unquotedBitLiterals:!0,hashComments:!0,spaceAfterDashes:!0,specialVar:"@?",identifierQuotes:"`",keywords:_+"group_concat "+F,types:G,builtin:Y}),dt=u.define({operatorChars:"*+-%<>!=&|^",charSetCasts:!0,doubleQuotedStrings:!0,unquotedBitLiterals:!0,hashComments:!0,spaceAfterDashes:!0,specialVar:"@?",identifierQuotes:"`",keywords:_+"always generated groupby_concat hard persistent shutdown soft virtual "+F,types:G,builtin:Y}),mt=u.define({keywords:_+"trigger proc view index for add constraint key primary foreign collate clustered nonclustered declare exec go if use index holdlock nolock nowait paglock pivot readcommitted readcommittedlock readpast readuncommitted repeatableread rowlock serializable snapshot tablock tablockx unpivot updlock with",types:h+"bigint smallint smallmoney tinyint money real text nvarchar ntext varbinary image hierarchyid uniqueidentifier sql_variant xml",builtin:"binary_checksum checksum connectionproperty context_info current_request_id error_line error_message error_number error_procedure error_severity error_state formatmessage get_filestream_transaction_context getansinull host_id host_name isnull isnumeric min_active_rowversion newid newsequentialid rowcount_big xact_state object_id",operatorChars:"*+-%<>!=^&|/",specialVar:"@"}),ut=u.define({keywords:_+"abort analyze attach autoincrement conflict database detach exclusive fail glob ignore index indexed instead isnull notnull offset plan pragma query raise regexp reindex rename replace temp vacuum virtual",types:h+"bool blob long longblob longtext medium mediumblob mediumint mediumtext tinyblob tinyint tinytext text bigint int2 int8 unsigned signed real",builtin:"auth backup bail changes clone databases dbinfo dump echo eqp explain fullschema headers help import imposter indexes iotrace lint load log mode nullvalue once print prompt quit restore save scanstats separator shell show stats system tables testcase timeout timer trace vfsinfo vfslist vfsname width",operatorChars:"*+-%<>!=&|/~",identifierQuotes:'`"',specialVar:"@:?$"}),ft=u.define({keywords:"add all allow alter and any apply as asc authorize batch begin by clustering columnfamily compact consistency count create custom delete desc distinct drop each_quorum exists filtering from grant if in index insert into key keyspace keyspaces level limit local_one local_quorum modify nan norecursive nosuperuser not of on one order password permission permissions primary quorum rename revoke schema select set storage superuser table three to token truncate ttl two type unlogged update use user users using values where with writetime infinity NaN",types:h+"ascii bigint blob counter frozen inet list map static text timeuuid tuple uuid varint",slashComments:!0}),pt=u.define({keywords:_+"abort accept access add all alter and any arraylen as asc assert assign at attributes audit authorization avg base_table begin between binary_integer body by case cast char_base check close cluster clusters colauth column comment commit compress connected constant constraint crash create current currval cursor data_base database dba deallocate debugoff debugon declare default definition delay delete desc digits dispose distinct do drop else elseif elsif enable end entry exception exception_init exchange exclusive exists external fast fetch file for force form from function generic goto grant group having identified if immediate in increment index indexes indicator initial initrans insert interface intersect into is key level library like limited local lock log logging loop master maxextents maxtrans member minextents minus mislabel mode modify multiset new next no noaudit nocompress nologging noparallel not nowait number_base of off offline on online only option or order out package parallel partition pctfree pctincrease pctused pls_integer positive positiven pragma primary prior private privileges procedure public raise range raw rebuild record ref references refresh rename replace resource restrict return returning returns reverse revoke rollback row rowid rowlabel rownum rows run savepoint schema segment select separate set share snapshot some space split sql start statement storage subtype successful synonym tabauth table tables tablespace task terminate then to trigger truncate type union unique unlimited unrecoverable unusable update use using validate value values variable view views when whenever where while with work",builtin:"appinfo arraysize autocommit autoprint autorecovery autotrace blockterminator break btitle cmdsep colsep compatibility compute concat copycommit copytypecheck define echo editfile embedded feedback flagger flush heading headsep instance linesize lno loboffset logsource longchunksize markup native newpage numformat numwidth pagesize pause pno recsep recsepchar repfooter repheader serveroutput shiftinout show showmode spool sqlblanklines sqlcase sqlcode sqlcontinue sqlnumber sqlpluscompatibility sqlprefix sqlprompt sqlterminator suffix tab term termout timing trimout trimspool ttitle underline verify version wrap",types:h+"ascii bfile bfilename bigserial bit blob dec long number nvarchar nvarchar2 serial smallint string text uid varchar2 xml",operatorChars:"*/+-%<>!=~",doubleQuotedStrings:!0,charSetCasts:!0});export{ft as Cassandra,mt as MSSQL,dt as MariaSQL,ct as MySQL,pt as PLSQL,lt as PostgreSQL,u as SQLDialect,ut as SQLite,z as StandardSQL,Ne as keywordCompletion,Ee as keywordCompletionSource,Ae as schemaCompletion,We as schemaCompletionSource,ot as sql};
